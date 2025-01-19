import { FilterQuery } from 'mongoose'
import User from '../models/user.model'
import { IUser, IFindAllUsersQuery } from '../interfaces/user.interface'

class MongoRepository {
  async createUser(userData: IUser) {
    const user = new User(userData)
    await user.save()
    return user.toObject()
  }

  async findAllUsers(query: IFindAllUsersQuery) {
    const offset = query.offset ?? 0
    const limit = query.limit ?? 10
    const filter: FilterQuery<IUser> = {}
    if (query.email) {
      filter.email = { $regex: query.email, $options: 'i' }
    }

    const selectArray = ['_id', 'email', 'firstName', 'lastName', 'createdAt']
    return User.find(filter)
      .skip(offset)
      .limit(limit)
      .select(selectArray)
      .exec()
  }

  async findUserById(id: string) {
    const selectArray = ['_id', 'email', 'firstName', 'lastName', 'createdAt']
    return User.findById(id).select(selectArray).exec()
  }

  async updateUser(id: string, userData: IUser) {
    return User.findByIdAndUpdate(id, userData, { new: true }).exec()
  }

  async deleteUser(id: string): Promise<boolean> {
    const result = await User.findByIdAndDelete(id).exec()
    return result !== null
  }

  async countUsers(): Promise<number> {
    return User.countDocuments().exec()
  }

  async findUserByEmail(email: string) {
    return User.findOne({ email }).exec()
  }
}

export default MongoRepository
