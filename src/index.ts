import BinarySearch from './BinarySearch'

const data = [1, 5, 10, 20, 45, 50, 60, 100]

const bs = new BinarySearch(data)
console.log(bs.search(60))
console.log(bs.iterationCount)
