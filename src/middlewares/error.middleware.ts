import { NextFunction, Request, Response } from 'express'
import { CustomError } from '../errors/custom.error'

export class ErrorMiddleware {
  handle(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message })
      return
    }

    console.error(error)
    res.sendStatus(500)
  }
}
