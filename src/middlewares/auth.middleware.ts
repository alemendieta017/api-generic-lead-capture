import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { CustomError } from '../errors/custom.error'

class AuthMiddleware {
  public handle = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      throw CustomError.unauthorized('No token provided')
    }

    const token = authHeader.split(' ')[1]

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string)
      req.user = decoded
      next()
    } catch {
      throw CustomError.unauthorized('Invalid token')
    }
  }
}

export default AuthMiddleware
