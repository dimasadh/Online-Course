const bcrypt = require('bcrypt');
const {User} = require('../../../models');
const Validator = require('fastest-validator')
const v = new Validator();

module.exports = async (req,res) =>{
    let update_data = {}
    const schema = {
        name: 'string|optional',
        email: 'email|optional',
        password: 'string|optional|min:6',
        profession: 'string|optional',
        avatar: 'string|optional'
    };

    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        })
    };

    const id = req.params.id;
    const user = await User.findByPk(id);
    if(!user){
        return res.status(404).json({
            status: 'error',
            message: 'user not found'
        })
    };

    const email = req.body.email;
    if(email){
        const checkEmail = await User.findOne({
            where: {email}
        });

        if (checkEmail && email !== user.email) {
            return res.status(409).json({
                status: 'error',
                message: 'email already exist'
            })
        };
        update_data['email'] = email;
    }
    if (req.body.password){
        update_data['password'] = await bcrypt.hash(req.body.password, 10);
    }
    update_data['name'] = req.body.name;
    update_data['profession'] = req.body.profession;
    update_data['avatar'] = req.body.avatar;

    await user.update(update_data);
    
    if ('password' in update_data) {
        delete update_data["password"]
    }
    return res.json({
        status: 'success',
        data: {
            update_data
        }
    })

}