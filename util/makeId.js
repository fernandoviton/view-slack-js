let nextId = 0;
const makeId = () => { nextId += 1; return nextId; };
export default makeId;