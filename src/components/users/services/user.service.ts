import bcrypt from 'bcrypt'
import { IUser, IFindAllUsersQuery } from '../interfaces/user.interface'
import UserRepository from '../repository/mongoRepository'
import { CustomError } from '../../../errors/custom.error'

class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: IUser) {
    const userExists = await this.userRepository.findUserByEmail(user.email)
    if (userExists) {
      throw new CustomError(404, 'User already exists')
    }

    const hashedPassword = await bcrypt.hash(user.password, 10)
    user.password = hashedPassword

    const createdUser = await this.userRepository.createUser(user)

    return {
      _id: createdUser._id,
      email: createdUser.email
    }
  }

  async getUserById(id: string) {
    const user = await this.userRepository.findUserById(id)
    if (!user) {
      throw new CustomError(404, 'User not found')
    }

    return {
      _id: user._id,
      email: user.email,
      createdAt: user.createdAt
    }
  }

  async updateUser(id: string, user: IUser) {
    const userExists = await this.userRepository.findUserById(id)
    if (!userExists) {
      throw new CustomError(404, 'User not found')
    }

    return this.userRepository.updateUser(id, user)
  }

  async deleteUser(id: string) {
    const userExists = await this.userRepository.findUserById(id)
    if (!userExists) {
      throw new CustomError(404, 'User not found')
    }
    return this.userRepository.deleteUser(id)
  }

  async countUsers() {
    return this.userRepository.countUsers()
  }

  async getUsers(query: IFindAllUsersQuery) {
    return this.userRepository.findAllUsers(query)
  }
}

export default UserService
