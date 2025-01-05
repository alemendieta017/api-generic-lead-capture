const config = {
  MONGODB_CONNECTION_STRING:
    process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/test',
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET
}

export default config
