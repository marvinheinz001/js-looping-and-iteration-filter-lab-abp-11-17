// Code your solution in this file
// function findMatching(array, name ){
//   let matches = []
//   for(const driver of array){
//     if (driver.toLowerCase() === name.toLowerCase()){
//       matches.push(driver)
//     }
//   }
//   return matches
// }

//using the actual filter function below
function findMatching(drivers, name){
  let matchingDrivers = drivers.filter(function(driver){
    if(name.toLowerCase() === driver.toLowerCase()){
      return true
    }else{
      return false
    }
  })
  return matchingDrivers
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


// filter on an object
function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
