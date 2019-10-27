const express = require('express')
const partidaRoutes = require('./routes/partidaRoutes')
const { ExpressSwagger } = require('node-swagger-ui-express');
const app = express();

app.use('/api/chuck', partidaRoutes)

const puerto = 3001
app.listen(puerto, () => {
    console.log(`servidor inicializado en puerto ${puerto}`)
})

ExpressSwagger.swaggerInit(app);
