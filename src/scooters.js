
class Scooter {
    constructor(name) {
      this.name = name;
      this.electric = [];
      this.manual = [];
    }
}
class ManualScooter extends Scooter {

}
      
class ElectricScooter extends Scooter {
        async charge() {
            console.log('Starting charge'); 
        
            await new Promise(resolve => setTimeout(resolve, 2000));
        
            console.log('Charge complete');
        }
    }

    scooterDock(scooter) {
      if (scooter instanceof ManualScooter) {
        this.manual.push(scooter);
        console.log("Needs no charge");
      } else if (scooter instanceof ElectricScooter) {
        this.electric.push(scooter);
        console.log("You need to plug in your scooter" )
      } else {
        console.log("Error");
      }
    }

const XiaomiPro2 = new ElectricScooter('Model1');
const XiaomiMi = new ElectricScooter('Model2');

  
  module.exports = Scooter, ElectricScooter, ManualScooter;












