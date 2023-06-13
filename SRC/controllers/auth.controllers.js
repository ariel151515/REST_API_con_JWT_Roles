import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../config.js'
import Role from '../models/Role.js'



export const signup = async (req, res) => {
    try {
        const { username, email, password, roles } = req.body

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        if (roles) { // { name: { $in: roles }  buesca en todos los roles y verifica si ya existe
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({ name: "user" })
            newUser.roles = [role._id];
        }

        // Devuelve un usuario guardado
        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
            expiresIn: 86400 // 24 horas
        })

        res.status(200).json({ message: 'Esto es lo que se gurdado en la base de datos', token: token });

    } catch (err) {
        res.status(500).json({ message: 'Error en el registro de usuario' }, newUser);
    }

}



export const signin = async (req, res) => {

    const userFound = await User.findOne({ email: req.body.email }).populate("roles")

    if (!userFound) return res.status(400).json({ message: "User not found" })

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)
    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalided password' })

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.json({ token })
}




