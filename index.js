const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
   let newObj = { [key]: value };
  return Object.assign({}, driver, newObj);
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver);
    delete newObj[key]; 
    return newObj;
  }

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
  }