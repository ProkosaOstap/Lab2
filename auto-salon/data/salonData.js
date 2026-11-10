const brands = [
  {
    id: 1,
    name: 'Toyota',
    country: 'Японія',
    models: ['Camry', 'Corolla', 'RAV4']
  },
  {
    id: 2,
    name: 'BMW',
    country: 'Німеччина',
    models: ['X5', 'X3', '3 Series']
  },
  {
    id: 3,
    name: 'Tesla',
    country: 'США',
    models: ['Model 3', 'Model Y']
  }
];

const configurations = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    configuration: 'Comfort',
    engine: '2.5 бензин',
    price: 32000
  },
  {
    id: 2,
    brand: 'BMW',
    model: 'X5',
    configuration: 'M Sport',
    engine: '3.0 дизель',
    price: 78000
  },
  {
    id: 3,
    brand: 'Tesla',
    model: 'Model 3',
    configuration: 'Long Range',
    engine: 'Електро',
    price: 49000
  }
];

const clients = [
  {
    id: 1,
    fullName: 'Іван Петренко',
    phone: '+380 67 123 45 67',
    email: 'ivan@example.com'
  },
  {
    id: 2,
    fullName: 'Олена Коваль',
    phone: '+380 50 987 65 43',
    email: 'olena@example.com'
  }
];

const options = [
  {
    id: 1,
    name: 'Шкіряний салон',
    price: 2500
  },
  {
    id: 2,
    name: 'Панорамний дах',
    price: 3200
  },
  {
    id: 3,
    name: 'Підігрів сидінь',
    price: 900
  }
];

const sales = [
  {
    id: 1,
    client: 'Іван Петренко',
    car: 'Toyota Camry Comfort',
    saleDate: '2024-05-12',
    price: 34500,
    status: 'Продано'
  },
  {
    id: 2,
    client: 'Олена Коваль',
    car: 'BMW X5 M Sport',
    saleDate: '2024-06-01',
    price: 81200,
    status: 'Продано'
  }
];

module.exports = {
  brands,
  configurations,
  clients,
  options,
  sales
};