import { Request, Response, NextFunction } from 'express'
import UserService from '../services/user.service'
import MongoRepository from '../repository/mongoRepository'

const userRepository = new MongoRepository()
const userService = new UserService(userRepository)

class UserController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body
      const token = await userService.login(email, password)
      res.status(200).json(token)
    } catch (error) {
      next(error)
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.body
      const user = await userService.createUser(userData)
      res.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const user = await userService.getUserById(id)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      const userData = req.body
      const user = await userService.updateUser(id, userData)
      res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params
      await userService.deleteUser(id)
      res.status(204).send()
    } catch (error) {
      next(error)
    }
  }

  async countUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const count = await userService.countUsers()
      res.status(200).json({ count })
    } catch (error) {
      next(error)
    }
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query
      const users = await userService.getUsers(query)
      res.status(200).json(users)
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
