const isPrime = num => {
  let i = 2, flager = Math.sqrt(num)
  while (i <= flager) {
    if (num % i === 0) return false
    i++
  }
  return num > 1

}

export default isPrime