# mach-backend-test

Backend Node.js + Express para MACH Race 2026.

## Stack

- Node.js 20
- Express 4
- CORS
- Jest + Supertest

## Requisitos

- Node.js >= 20

## Instalación

```bash
npm install
```

## Uso

```bash
npm start      # producción — puerto 3001
npm run dev    # desarrollo con hot-reload (node --watch)
npm test       # tests con Jest
```

## Endpoints

| Método | Ruta         | Descripción              |
|--------|--------------|--------------------------|
| GET    | `/health`    | Estado del servicio      |
| GET    | `/api/hello` | Mensaje de prueba        |

## Docker

```bash
docker build -t mach-backend-test .
docker run -p 3001:3001 mach-backend-test
```

## Variables de entorno

| Variable | Default | Descripción      |
|----------|---------|------------------|
| `PORT`   | `3001`  | Puerto del servidor |
