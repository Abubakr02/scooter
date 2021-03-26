const { readFile } = require('fs/promises')

class User {
    constructor(name, scooter, station) {
      this.name = name;
      this.scooter = scooter;
      this.station = station;
    } 
  }

module.exports = User