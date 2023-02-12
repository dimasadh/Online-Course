const {User} = require('../../../models')

module.exports = async (req,res) =>{
    const userIds = req.query.user_ids || []
    const queryOptions = {
        attributes: ['id', 'name', 'email', 'role', 'profession', 'avatar']
    }

    if(userIds.length){
        queryOptions.where = {
            id: userIds
        }
    }

    const users = await User.findAll(queryOptions)
    return res.json({
        status: 'success',
        data:{
            users
        }
    })
}