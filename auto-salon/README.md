

## Розгортання на Railway

1. Завантажте папку проєкту в репозиторій GitHub (без `node_modules`).
2. На [railway.app](https://railway.app): **New Project -> Deploy from GitHub repo**.
3. У **Settings -> Networking -> Generate Domain** створіть публічну адресу.

Запуск відбувається скриптом `npm start`, порт читається зі змінної `PORT`.
Дані зберігаються в памʼяті — при перезапуску сервіса відновлюється початкове наповнення.
