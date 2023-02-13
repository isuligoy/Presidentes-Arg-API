const express = require('express');
const app = express()
const cors = require('cors')
const PORT = 8000

app.set('view engine', 'ejs')
app.use(cors())

app.use('/', require('./routes/apiRoutes'))

// Start the server in the PORT
app.listen( process.env.PORT || PORT, () => {
    console.log(`the server is running in port ${PORT}, go catch it!`)
})