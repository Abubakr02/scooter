const users = require('./users.js')
const users = require('./scooters.js')
const users = require('./hiringStations.js')

test('charge', async () => {
    const scooter = new Scooter();
    await scooter.charge();
    console.log("Test complete");
})

test()