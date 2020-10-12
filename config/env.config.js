module.exports = {
  port: 3000,
  jwt_secret: 'SuperSecret!',
  mongo_user: 'root',
  mongo_pass: 'toor',
  permission: {
    USER: 1,
    ADMIN: 2048,
    SUPER_ADMIN: 4096
  },
  users: [
    {
      username: 'user',
      password: 'user',
      permission: '1'
    },
    {
      username: 'admin',
      password: 'admin',
      permission: '2048'
    },
    {
      username: 'super_admin',
      password: 'super_admin',
      permission: '4096'
    }
  ]
}
