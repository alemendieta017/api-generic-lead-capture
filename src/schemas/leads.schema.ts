import Joi, { Schema, CustomHelpers } from 'joi'
import { Types } from 'mongoose'

const createLeadSchema: Schema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required()
})

const updateLeadSchema: Schema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string().required(),
  email: Joi.string().email(),
  phone: Joi.string()
})

const getLeadsQuerySchema: Schema = Joi.object({
  offset: Joi.number().min(0).default(0),
  limit: Joi.number().min(1).default(10),
  email: Joi.string(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  phone: Joi.string(),
  dateFrom: Joi.date().iso(),
  dateTo: Joi.date().iso()
})

const objectIdValidation = (value: string, helpers: CustomHelpers) => {
  if (!Types.ObjectId.isValid(value)) {
    return helpers.message({ custom: 'Invalid ObjectId' })
  }
  return value
}

const getLeadSchema: Schema = Joi.object({
  id: Joi.string().custom(objectIdValidation).required()
})

const deleteLeadSchema: Schema = Joi.object({
  id: Joi.string().custom(objectIdValidation).required()
})

export {
  createLeadSchema,
  updateLeadSchema,
  getLeadsQuerySchema,
  getLeadSchema,
  deleteLeadSchema
}
