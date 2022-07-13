const randomIndex = (length: number, movieCount:number ):number[] => {
  const random = [];
  for (let i = 0; i < length; i++) {
    const count = Math.floor(Math.random() * length) + 1;
    random.push(count);
    const set = new Set(random)
    if (Array.from(set).length === movieCount) {
      break;
    }
  }
  const randomArray = Array.from(new Set(random))
  return randomArray;
}

export default randomIndex