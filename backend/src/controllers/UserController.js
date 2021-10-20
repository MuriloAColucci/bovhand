const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, { 
        expiresIn: 78300,
    })
}

module.exports = {
    async login(req, res){
        const { email, password, islogged } = req.body;
        const user = await User.findOne({ where: { email }});

        if(!user){
            return res.status(200).send({
                status: 500,
                message: 'E-mail ou senha incorreto!'
            });
        }

        if(!bcrypt.compareSync(password, user.password)){
            return res.status(200).send({
                status: 500,
                message: 'Senha incorreta!'
            });
        }

        const user_id = user.id;

        await User.update({
            islogged
        },{
            where:{
                id: user_id
            }
        });

        user.password = undefined

        const token = generateToken({ id: user.id });

        return res.status(200).send({
            status: 200,
            message: "Usuário logado com sucesso!",
            user, token
        });
    },
    async index(req, res){
        const users = await User.findAll();

        if(users == "" || users == null){
            return res.status(200).send({ message: "Nenhum usuário cadastrado"});
        }

        return res.status(200).send({ users });
    },
    async store(req, res){
        const { nameusers, farm, email, password } = req.body;

        const userExist = await User.findOne({ where: { email }});
        if(userExist){
            res.status(400).send({ error: 'Email já cadastrado'});
        }else{
            const user = await User.create( {nameusers, farm, email, password } );

            const token = generateToken({ id: user.id });

            return res.status(200).send({
                status: 200,
                message: 'Usuário cadastrado com sucesso!',
                user, token
            });
        }
    },
    async update(req, res){
        const { nameusers, farm, email, password } = req.body;
        const { user_id } = req.params;

        await User.update({
            nameusers, farm, email, password
        },{
            where: {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 200,
            message: "Usuário atualizado com sucesso!"
        })
    },
    async delete(req, res){
        const { user_id } = req.params;
        
        await User.destroy({
            where: {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 200,
            message: "Usuário deletado com sucesso!"
        })
    },
};