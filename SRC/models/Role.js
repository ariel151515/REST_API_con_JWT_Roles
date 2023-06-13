import { Schema, model } from 'mongoose'

export const ROLES = ["user", "admin", "moderator"]

const roleShema = new Schema({
    name: String
}, {
    versionkey: false
})

export default model('Role', roleShema)