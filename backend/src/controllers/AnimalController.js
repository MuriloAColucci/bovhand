const User = require('../models/User');
const Animal = require('../models/Animal');

module.exports = {
    async index(req, res){
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'animal'}
        })

        if (!user){
            return res.status(400).send({
                status: 0,
                message: 'Animal não encontrado!'
            })
        }

        return res.status(200).send(user.animal);
    },
    async getOne(req, res){
        const id = req.params.id;

        try{
            const { user_id }  = req.params;

            const user = await User.findOne({where: {id: user_id}});
            const animal = await Animal.findByPk(id)
            
            if(animal && user){
                return res.status(200).send(animal);
                
            }else{
                return res.status(400).send({
                    status: 0,
                    message: 'Animal não encontrado!'
                })
            }
        }catch(error){
            return res.status(400).json({ error: err });
        }
    },
    async store(req, res){
        try{
            const { user_id } = req.params;
            const { register, nameanimal, race, gender, origin, birthday, price, mother, father } = req.body;

            const user = await User.findByPk(user_id);

            if(!user){
                return res.status(400).json({
                    status: 0,
                    message: "Usuário não encontrado!"
                });
            }

            const animal = await Animal.create({
                register, nameanimal, race, gender, origin, birthday, price, mother, father, user_id,
            });

            return res.status(200).json({
                status: 1,
                message: "Animal cadastrado com sucesso!",
                animal,
            })
        }catch(err){
            return res.status(400).json({ error: err });
        }
    },
    async update(req, res){
        const id = req.params.id;
        const { register, nameanimal, race, gender, origin, birthday, price, mother, father } = req.body;

        try{
            const animal = await Animal.findByPk(id);

            if(animal){
                await Animal.update({ register, nameanimal, race, gender, origin, birthday, price, mother, father }, { where: { id }});

                return res.status(200).json({
                    status: 1,
                    message: "Animal atualizado com sucesso!",
                });
            }else{
                return res.status(400).json({
                    status: 0,
                    message: "Animal não encontrado!",
                });
            }
        }catch(error){
            return res.status(400).json({
                status: 0,
                message: 'Erro ao atualizar animal!'
            })
        }
    },
    async delete(req, res){
        const id = req.params.id;
        
        try{
            const animal = await Animal.findByPk(id);

            if(animal){
                await Animal.destroy({ where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Animal apagado com sucesso!",
                });
            }else{
                return res.status(400).json({
                    status: 0,
                    message: "Animal não encontrado!",
                });
            }
        }catch(err){
            return res.status(400).json({ error: err });
        }
    },
};