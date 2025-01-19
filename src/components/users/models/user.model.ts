import mongoose, { Schema } from 'mongoose'

import { IUser } from '../interfaces/user.interface'

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true, minlength: 3, maxlength: 100 },
    lastName: { type: String, required: true, minlength: 3, maxlength: 100 },
    password: { type: String, required: true, minlength: 3, maxlength: 100 }
  },
  { timestamps: true }
)

const User = mongoose.model<IUser>('User', userSchema)

export default User
