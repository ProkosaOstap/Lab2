const data = require('../data/salonData');
const { validate } = require('../utils/validation');

const collections = {
  brands: data.brands,
  configurations: data.configurations,
  clients: data.clients,
  sales: data.sales,
  options: data.options
};

const titles = {
  brands: 'Марка автомобіля',
  configurations: 'Комплектація',
  clients: 'Клієнт',
  sales: 'Продаж',
  options: 'Додаткова опція'
};

exports.getHomePage = (req, res) => {
  res.render('index', {
    title: 'Автосалон',
    brandsCount: data.brands.length,
    configurationsCount: data.configurations.length,
    clientsCount: data.clients.length,
    salesCount: data.sales.length
  });
};

exports.getBrands = (req, res) => {
  res.render('brands', {
    title: 'Марки автомобілів',
    brands: data.brands
  });
};

exports.getConfigurations = (req, res) => {
  res.render('configurations', {
    title: 'Комплектації',
    configurations: data.configurations
  });
};

exports.getClients = (req, res) => {
  res.render('clients', {
    title: 'Клієнти',
    clients: data.clients
  });
};

exports.getSales = (req, res) => {
  res.render('sales', {
    title: 'Продажі',
    sales: data.sales
  });
};

exports.getOptions = (req, res) => {
  res.render('options', {
    title: 'Додаткові опції',
    options: data.options
  });
};

// Відображення форми редагування
exports.getEditForm = (req, res) => {
  const { type, id } = req.params;
  const collection = collections[type];

  if (!collection) {
    return res.status(404).send('Невідомий тип таблиці');
  }

  const item = collection.find(element => element.id === Number(id));

  if (!item) {
    return res.status(404).send('Запис не знайдено');
  }

  res.render('edit', {
    title: `Редагування: ${titles[type]}`,
    type,
    item,
    errors: []
  });
};

// Обробка форми редагування
exports.updateItem = (req, res) => {
  const { type, id } = req.params;
  const collection = collections[type];

  if (!collection) {
    return res.status(404).send('Невідомий тип таблиці');
  }

  const item = collection.find(element => element.id === Number(id));

  if (!item) {
    return res.status(404).send('Запис не знайдено');
  }

  const errors = validate(type, req.body);

  if (errors.length > 0) {
    return res.status(400).render('edit', {
      title: `Редагування: ${titles[type]}`,
      type,
      item: {
        ...req.body,
        id: item.id
      },
      errors
    });
  }

  let updatedData = { ...req.body };

  if (type === 'brands') {
    updatedData.models = req.body.models
      .split(',')
      .map(model => model.trim())
      .filter(model => model.length > 0);
  }

  if (
    type === 'configurations' ||
    type === 'options' ||
    type === 'sales'
  ) {
    updatedData.price = Number(req.body.price);
  }

  Object.assign(item, updatedData);

  res.redirect(`/${type}`);
};