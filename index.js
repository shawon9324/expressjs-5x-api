const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Hello Express 5.0!')
})
app.listen(port, () => {
    console.log(`My App is listening on port ${port}`)
})