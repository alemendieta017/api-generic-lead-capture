import mongoose, { Schema } from 'mongoose'
import { ILead } from '../interfaces/lead.interface'

const leadSchema: Schema = new Schema<ILead>(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true }
  },
  { timestamps: true }
)

const Lead = mongoose.model('Lead', leadSchema)

export default Lead
