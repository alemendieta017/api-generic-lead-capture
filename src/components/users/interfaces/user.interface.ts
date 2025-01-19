interface IUser {
  email: string
  firstName: string
  lastName: string
  password: string
  createdAt?: Date
}

interface IFindAllUsersQuery {
  email?: string
  offset?: number
  limit?: number
}

export { IUser, IFindAllUsersQuery }
