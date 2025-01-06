import Joi, { Schema, CustomHelpers } from 'joi'
import { Types } from 'mongoose'

const createUserSchema: Schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(100).required()
})

const updateUserSchema: Schema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(3).max(100)
})

const getUsersQuerySchema: Schema = Joi.object({
  offset: Joi.number().min(0).default(0),
  limit: Joi.number().min(1).default(10),
  email: Joi.string()
})

const objectIdValidation = (value: string, helpers: CustomHelpers) => {
  if (!Types.ObjectId.isValid(value)) {
    return helpers.message({ custom: 'Invalid ObjectId' })
  }
  return value
}

const getUserSchema: Schema = Joi.object({
  id: Joi.string().custom(objectIdValidation).required()
})

const deleteUserSchema: Schema = Joi.object({
  id: Joi.string().custom(objectIdValidation).required()
})

export {
  createUserSchema,
  updateUserSchema,
  getUsersQuerySchema,
  getUserSchema,
  deleteUserSchema
}
