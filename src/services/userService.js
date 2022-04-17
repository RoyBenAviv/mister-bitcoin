export const userService = {
  getUser,
}

function getUser() {
  const user = {
    name: 'Roy',
    coins: 100,
    moves: [],
  }
  return Promise.resolve(user)
}
