import { storageService } from './storageService'


const USER_KEY = 'user'

export const userService = {
  getUser,
  signup,
  // saveCoins,
  addMove
}

function getUser() {
    const user =  storageService.load(USER_KEY)
    return user
}

function addMove(contact, amount) {
  const user =  storageService.load(USER_KEY)
  const move = {
    toId: contact._id,
    to: contact.name,
    at: Date.now(),
    amount
  }
  user.coins -= amount
  user.moves.unshift(move)
  storageService.store(USER_KEY, user)
}

function signup(name) {
 const user = {
    name,
    coins: 100,
    moves: []
  }
  storageService.store(USER_KEY, user)
  return user
}