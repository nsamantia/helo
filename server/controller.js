const bcrypt = require('bcryptjs')

const getAllPosts = async (db) => {
    const posts = await db.get_posts()
    return posts
}

module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await getAllPosts(db)
        res.status(200).send(posts)

    }
}