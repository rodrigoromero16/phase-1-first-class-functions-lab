const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
};
const firstTwoDrivers = returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
};
const lastTwoDrivers = returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']);
console.log(lastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingFunction) {
    return selectingFunction(drivers);
  }
  