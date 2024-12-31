import express, { Request, Response, NextFunction } from 'express'
import logger from 'morgan'
import leadsRouter from './routes/leads.router'
import { ErrorMiddleware } from './middlewares/error.middleware'

const errorMiddleware = new ErrorMiddleware().handle

const app = express()
const port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(express.json())

app.use('/leads', leadsRouter)
app.get('/healthz', (req, res) => {
  res.send('OK')
})


app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not Found')
  res.status(404)
  next(error)
})

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`)
})
