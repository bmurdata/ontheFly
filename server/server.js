import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 3002

const app=express()
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})