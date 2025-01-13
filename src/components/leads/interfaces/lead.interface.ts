interface ILead {
  email: string
  firstName: string
  lastName: string
  phone: string
  createdAt: Date
}

interface findAllLeadsQuery {
  firstName?: string
  lastName?: string
  email?: string
  dateFrom?: string
  dateTo?: string
  offset?: number
  limit?: number
}

export { ILead, findAllLeadsQuery }
