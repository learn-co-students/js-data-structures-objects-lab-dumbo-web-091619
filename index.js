// Write your solution in this file!
const driver ={}
function updateDriverWithKeyAndValue(driver, key, value){
    const newDriver = Object.assign({}, driver, { [key]: value})
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const deletedObj = Object.assign({}, driver);
    delete deletedObj[key];
    return deletedObj
}

function destructivelyDeleteFromDriverByKey(driver, key, value){
    delete driver[key];
    return driver;
}