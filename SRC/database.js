import mongoose from 'mongoose'

/*
//mongodb connection
mongoose
    .connect(process.env.URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));
*/

const uri = 'mongodb://ndcdigital2020:cVxGpL4AmVp79rcD@ac-pfrlayb-shard-00-00.mnwamfa.mongodb.net:27017,ac-pfrlayb-shard-00-01.mnwamfa.mongodb.net:27017,ac-pfrlayb-shard-00-02.mnwamfa.mongodb.net:27017/?ssl=true&replicaSet=atlas-okr7lz-shard-0&authSource=admin&retryWrites=true&w=majority'

// Verificar que la variable 'uri' esté definida y sea una cadena de texto
if (typeof uri !== 'string') {
    console.error("El parámetro 'uri' debe ser una cadena de texto.");
    // Agregar cualquier otra lógica o manejo de errores según tus necesidades
} else {
    // Conectar a MongoDB utilizando la cadena de conexión
    mongoose.connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log('Conexión exitosa a MongoDB');
            // Continuar con el código restante
        })
        .catch(err => {
            console.error('Error al conectar a MongoDB:', err);
            // Agregar cualquier otra lógica o manejo de errores según tus necesidades
        });
}