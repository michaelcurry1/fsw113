let cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-02-03'),
      "capacity": 5
    },
    {
      "color": "red",
      "type": "minivan",
      "registration": new Date('2017-03-03'),
      "capacity": 7
    },
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-04-03'),
      "capacity": 7
    },
    {
      "color": "purple",
      "type": "station wagon",
      "registration": new Date('2017-05-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "truck",
      "registration": new Date('2017-06-03'),
      "capacity": 7
    },
    {
      "color": "purple",
      "type": "truck",
      "registration": new Date('2017-07-03'),
      "capacity": 7
    },
    {
      "color": "purple",
      "type": "sports car",
      "registration": new Date('2017-08-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "minivan",
      "registration": new Date('2017-09-03'),
      "capacity": 7
    },
    {
      "color": "green",
      "type": "minivan",
      "registration": new Date('2017-10-03'),
      "capacity": 7
    }
]
 var items = cars.filter(car=>  car.color ==="green" || car.color ==="red")
//  var items1 = cars.filter(car=>  car.color ==="red")
console.log(items);
// console.log(items1)
