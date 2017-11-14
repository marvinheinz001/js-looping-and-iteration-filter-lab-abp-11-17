// Code your solution in this file
function findMatching(array, name ){
  let matches = []
  for(const driver of array){
    if (driver.toLowerCase() === name.toLowerCase()){
      matches.push(driver)
    }
  }
  return matches
}

function fuzzyMatch(array, criteria ){
  let matches = []
  for(const driver of array){
    if (driver.toLowerCase().indexOf(criteria.toLowerCase()) === 0) {
      matches.push(driver)
    }
  }
  return matches
}
