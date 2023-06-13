import Role from '../models/Role.js'

export const createRoles = async () => {
    try {

        const count = await Role.estimatedDocumentCount()// pasa raber si ya existen documentos estimatedDocumentCount

        if (count > 0) return;

        const values = await Promise.all([ // Promise.all Ejecuta todas las promesas al mismo tiempo
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save()
        ])

        console.log(values)
    } catch (error) {
        console.error(error)
    }
}