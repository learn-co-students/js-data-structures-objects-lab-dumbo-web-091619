// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
  const localDriver = { ...driver }
  localDriver[key] = value
  return localDriver
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey (driver, key) {
  const localDriver = { ...driver }
  delete localDriver[key]
  return localDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}