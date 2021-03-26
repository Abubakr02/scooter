const { readFile } = require('fs/promises')

class HiringStation {
    static hiringStations = []

    constructor(location) {
        this.location = location;
        this.scooters = [];
        this.consructor.hiringStations.push(this);
    }

    hire(scooter){
        this.scooters.push(scooter);
    } 

    return(scooter){
        this.scooters.splice(scooter);
    }

}

const stratford = new HiringStation('Stratford');
const whitechapel = new HiringStation('Whitechapel');

const fs = require('fs')

module.exports = HiringStation