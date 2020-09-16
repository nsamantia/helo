const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')

        const {username, password} = req.body

        

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        
        const [newUser] = await db.register_user([username, hash])

        req.session.user = newUser

        res.status(200).send(req.session.user)

    },

    login: async (req, res) => {
        const db = req.app.get('db')

        const {username, password} = req.body

        const [alreadyUser] = await db.check_user([username])

        if(!alreadyUser){
            return res.status(404).send('User not found')
        }

        const isAuth = bcrypt.compareSync(password, alreadyUser.hash)

        if (!isAuth){
            return res.status(402).send('Incorrect email or password')
        }
        
        delete alreadyUser.hash

        req.session.user = alreadyUser

        res.status(200).send(req.session.user)

    }



}