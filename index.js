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

function findMatching(drivers, name){
  drivers.filter(function(driver){
    if(name.toLowerCase() === driver.toLowerCase()){
      return true
    }else{
      return false
    }
  })
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
