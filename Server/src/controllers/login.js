const usuarios = require('../utils/users')

const login = (req, res) => {
    const {email, password} = req.query
    const match = usuarios.find((user) => user.email === email && user.password === password)

    if (match){
        res.status(200).json({access: true})
    }
    else{
        res.status(200).json({access: false})
    }

}

module.exports = login