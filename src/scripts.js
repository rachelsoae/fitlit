const getUser = (dataset, id) => {
  return dataset.find(user => user.id === id)
}

// const averageStepGoal = (dataset) => {
//   return dataset.reduce(())
// }

export {
  getUser,
  // averageStepGoal
};