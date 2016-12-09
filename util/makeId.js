var nextId = 0
const makeId = () => {
  return nextId++;
}
export default makeId