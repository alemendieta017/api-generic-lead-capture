import { NextFunction, Request, Response, ErrorRequestHandler } from 'express'
import { CustomError } from '../errors/custom.error'

export class ErrorMiddleware {
  handle: ErrorRequestHandler = (
    error: Error | CustomError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ message: error.message })
      return
    }

    console.error(error)
    res.sendStatus(500)
  }
}
