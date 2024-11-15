// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow{

  vin: string;
  color: string;
  make:string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[]
  towingCapacity: number
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  constructor(vin: string, color: string, make:string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number ){
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    if (this.wheels.length == 4) {
      for (let i = 0; i < 4; i++) {
        let newWheels = new Wheel() 
      }
    }
  }
  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make and model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    let newMake = this.make;
    let newModel = this.model;

    if (this.weight <= this.towingCapacity) {
      console.log('vehicle is being towed');
    }else{
      console.log('vehicle is too heavy to be towed')
    }
  }

  override printDetails(): void {
    console.log(`vin: ${this.vin}, make: ${this.make}, model: ${this.model}, year: ${this.year}, weight: ${this.weight}, top speed: ${this.topSpeed}, color: ${this.color}, towing capacity: ${this.towingCapacity}, wheels: ${this.wheels}` )
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
}

// Export the Truck class as the default export
export default Truck;