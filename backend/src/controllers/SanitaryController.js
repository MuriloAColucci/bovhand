const Animal = require('../models/Animal');
const Sanitary = require('../models/Sanitary');

module.exports = {
    async index(req, res){
        const { animal_id } = req.params;

        const animal = await Animal.findByPk(animal_id, {
            include: { association: 'sanitary'}
        })

        if (!animal){
            return res.status(400).send({
                status: 0,
                message: 'Sanitario não encontrado!'
            })
        }

        return res.status(200).send(animal.sanitary);
    },
    async getOne(req, res){
        const id = req.params.id;

        try{
            const { animal_id }  = req.params;
            
            const animal = await Animal.findOne({where: {id: animal_id}});
            const sanitary = await Sanitary.findByPk(id)
            
            if(sanitary && animal){
                return res.status(200).send(sanitary);
                
            }else{
                return res.status(400).send({
                    status: 0,
                    message: 'Sanitario não encontrado!'
                })
            }
        }catch(error){
            return res.status(400).json({ error: err });
        }
    },
    async store(req, res){
        try{
            const { animal_id } = req.params;
            const { date, namesanitary, dose, price } = req.body;

            const animal = await Animal.findByPk(animal_id);

            if(!animal){
                return res.status(400).json({
                    status: 0,
                    message: "Animal não encontrado!"
                });
            }

            const sanitary = await Sanitary.create({
                date, namesanitary, dose, price, animal_id,
            });

            return res.status(200).json({
                status: 1,
                message: "Sanitario cadastrado com sucesso!",
                sanitary,
            })
        }catch(err){
            return res.status(400).json({ error: err });
        }
    },
    async update(req, res){
        const id = req.params.id;
        const { date, namesanitary, dose, price } = req.body;

        try{
            const sanitary = await Sanitary.findByPk(id);

            if(sanitary){
                await Sanitary.update({ date, namesanitary, dose, price }, { where: { id }});

                return res.status(200).json({
                    status: 1,
                    message: "Sanitario atualizado com sucesso!",
                });
            }else{
                return res.status(400).json({
                    status: 0,
                    message: "Sanitario não encontrado!",
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
            const sanitary = await Sanitary.findByPk(id);

            if(sanitary){
                await Sanitary.destroy({ where: { id } });

                return res.status(200).json({
                    status: 1,
                    message: "Sanitario apagado com sucesso!",
                });
            }else{
                return res.status(400).json({
                    status: 0,
                    message: "Sanitario não encontrado!",
                });
            }
        }catch(err){
            return res.status(400).json({ error: err });
        }
    },
};