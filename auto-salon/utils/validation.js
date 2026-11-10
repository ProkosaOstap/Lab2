function isEmpty(value) {
  return value === undefined || value === null || value.toString().trim() === '';
}

function isPositiveNumber(value) {
  return !isNaN(value) && Number(value) > 0;
}

function validate(type, body) {
  const errors = [];

  if (type === 'brands') {
    if (isEmpty(body.name)) {
      errors.push('Вкажіть назву марки');
    }

    if (isEmpty(body.country)) {
      errors.push('Вкажіть країну-виробника');
    }

    if (isEmpty(body.models)) {
      errors.push('Вкажіть хоча б одну модель');
    }
  }

  if (type === 'configurations') {
    if (isEmpty(body.brand)) {
      errors.push('Вкажіть марку автомобіля');
    }

    if (isEmpty(body.model)) {
      errors.push('Вкажіть модель автомобіля');
    }

    if (isEmpty(body.configuration)) {
      errors.push('Вкажіть назву комплектації');
    }

    if (isEmpty(body.engine)) {
      errors.push('Вкажіть тип двигуна');
    }

    if (!isPositiveNumber(body.price)) {
      errors.push('Ціна повинна бути додатним числом');
    }
  }

  if (type === 'clients') {
    if (isEmpty(body.fullName)) {
      errors.push('Вкажіть ПІБ клієнта');
    }

    if (isEmpty(body.phone)) {
      errors.push('Вкажіть номер телефону');
    }

    if (isEmpty(body.email)) {
      errors.push('Вкажіть email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      errors.push('Некоректний формат email');
    }
  }

  if (type === 'options') {
    if (isEmpty(body.name)) {
      errors.push('Вкажіть назву додаткової опції');
    }

    if (!isPositiveNumber(body.price)) {
      errors.push('Ціна повинна бути додатним числом');
    }
  }

  if (type === 'sales') {
    if (isEmpty(body.client)) {
      errors.push('Вкажіть клієнта');
    }

    if (isEmpty(body.car)) {
      errors.push('Вкажіть автомобіль');
    }

    if (isEmpty(body.saleDate)) {
      errors.push('Вкажіть дату продажу');
    }

    if (!isPositiveNumber(body.price)) {
      errors.push('Ціна повинна бути додатним числом');
    }

    if (isEmpty(body.status)) {
      errors.push('Вкажіть статус продажу');
    }
  }

  return errors;
}

module.exports = {
  validate
};