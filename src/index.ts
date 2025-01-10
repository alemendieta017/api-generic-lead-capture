import express, { Request, Response } from 'express'
import logger from 'morgan'
import cors from 'cors'
import leadsRouter from './routes/leads.router'
import usersRouter from './routes/users.router'
import { ErrorMiddleware } from './middlewares/error.middleware'
import connectDB from './config/db'
import config from './config/config'

const errorMiddleware = new ErrorMiddleware().handle

const app = express()
const port = config.PORT

connectDB(config.MONGODB_CONNECTION_STRING)

app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.use('/leads', leadsRouter)
app.use('/users', usersRouter)
app.get('/healthz', (req, res) => {
  res.send('OK')
})

app.use((req: Request, res: Response) => {
  const error = new Error('Not Found')
  res.status(404).json({ message: error.message })
})

app.use(errorMiddleware)

app.listen(port, () => {
  console.log(`Server running in port ${port}`)
})
