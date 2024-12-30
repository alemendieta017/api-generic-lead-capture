import express from 'express'
import leadsRouter from './src/routes/leads'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.get('/healthz', (req, res) => {
  res.send('OK')
})
app.use('/leads', leadsRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
