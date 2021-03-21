const MIN_SIP = 1
const MAX_SIP = 4

const MIN_LOW_SIP = 1
const MAX_LOW_SIP = 2

export function getRandomPlayer (players) {
  const index = Math.floor(Math.random() * players.length)
  return players[index]
}

export function getRandomSip () {
  const randomSips = Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP
  const number = "" + randomSips + "";
  if(randomSips < 2) {
    return number + " Zina";
  } else {
    return number + " Zina's";
  }
}

export function getRandomNumb () {
  return Math.floor(Math.random() * (MAX_SIP - MIN_SIP + 1)) + MIN_SIP
}

export function getLowSip () {
  const randomSips = Math.floor(Math.random() * (MAX_LOW_SIP - MIN_LOW_SIP + 1)) + MIN_LOW_SIP
  const number = "" + randomSips + "";
  if(randomSips < 2) {
    return number + " Zina";
  } else {
    return number + " Zina's";
  }
}
