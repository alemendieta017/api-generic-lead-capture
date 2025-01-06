import { Router } from 'express'

import UsersController from '../components/users/controllers/user.controller'
import ValidatorMiddleware from '../middlewares/validator.middleware'
import AuthMiddleware from '../middlewares/auth.middleware'
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
  new AuthMiddleware().handle,
  new ValidatorMiddleware(createUserSchema, 'body').handle,
  usersController.createUser
)
router.get(
  '/',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getUsersQuerySchema, 'query').handle,
  usersController.getUsers
)
router.post('/login', usersController.login)
router.get('/count', new AuthMiddleware().handle, usersController.countUsers)
router.get(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getUserSchema, 'params').handle,
  usersController.getUserById
)
router.put(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(getUserSchema, 'params').handle,
  new ValidatorMiddleware(updateUserSchema, 'body').handle,
  usersController.updateUser
)
router.delete(
  '/:id',
  new AuthMiddleware().handle,
  new ValidatorMiddleware(deleteUserSchema, 'params').handle,
  usersController.deleteUser
)

export default router
