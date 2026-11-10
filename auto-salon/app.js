const express = require('express');
const path = require('path');

const salonRoutes = require('./routes/salonRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', salonRoutes);

app.use((req, res) => {
  res.status(404).send('Сторінку не знайдено');
});

app.listen(PORT, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});