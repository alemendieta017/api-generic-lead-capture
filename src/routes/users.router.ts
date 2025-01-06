import { Router } from 'express'

import UsersController from '../components/users/controllers/user.controller'
import ValidatorMiddleware from '../middlewares/validator.middleware'
import {
  createUserSchema,
  updateUserSchema,
  getUsersQuerySchema,
  getUserSchema,
  deleteUserSchema
} from '../schemas/users.schema'

const router = Router()
const usersController = new UsersController()

router.post(
  '/',
  new ValidatorMiddleware(createUserSchema, 'body').handle,
  usersController.createUser
)
router.get(
  '/',
  new ValidatorMiddleware(getUsersQuerySchema, 'query').handle,
  usersController.getUsers
)
router.get('/count', usersController.countUsers)
router.get(
  '/:id',
  new ValidatorMiddleware(getUserSchema, 'params').handle,
  usersController.getUserById
)
router.put(
  '/:id',
  new ValidatorMiddleware(getUserSchema, 'params').handle,
  new ValidatorMiddleware(updateUserSchema, 'body').handle,
  usersController.updateUser
)
router.delete(
  '/:id',
  new ValidatorMiddleware(deleteUserSchema, 'params').handle,
  usersController.deleteUser
)

export default router
