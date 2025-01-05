import { Request, Response, NextFunction } from 'express'
import { Schema } from 'joi'

type RequestProperty = 'params' | 'query' | 'body'

class ValidatorMiddleware {
  private schema: Schema
  private property: RequestProperty

  constructor(schema: Schema, property: RequestProperty) {
    this.schema = schema
    this.property = property
  }

  public handle = (req: Request, res: Response, next: NextFunction): void => {
    const data = req[this.property]
    const { error } = this.schema.validate(data, {
      abortEarly: false,
      convert: true,
    })
    if (error) {
      const details = error.details.map((e) => e.message)
      res.status(400).json({ error: details })
    } else {
      next()
    }
  }
}

export default ValidatorMiddleware
