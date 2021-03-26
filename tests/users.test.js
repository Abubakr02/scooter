const users = require('./users.js')
const users = require('./scooters.js')
const users = require('./hiringStations.js')

describe('HiringStation test', () => {
    test.skip('checking HiringStation classes', () => {
      let stratford = new HiringStation('Stratford');
      expect(stratford.name).toEqual('Stratford');
    });
  });

