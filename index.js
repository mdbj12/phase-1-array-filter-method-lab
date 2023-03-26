function findMatching(drivers, ele){
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === ele.toLowerCase()
    })
};

function fuzzyMatch(drivers, ele){
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, ele.length) === ele.toLowerCase()
    })
}

function matchName(drivers, argument) {
    return drivers.filter(function (driver) {
        return driver.name === argument
    })
}