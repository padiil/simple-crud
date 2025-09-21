# Simple CRUD (Express + Mongo + Tailwind)

A very small Todo-style CRUD app using Express, MongoDB (Mongoose), and TailwindCSS (via CDN). Views use EJS.

## Prerequisites
- Node.js 18+
- MongoDB running locally or a Mongo URI

## Setup
1. Copy env file
```sh
cp .env.example .env
```
2. If needed, edit `.env` with your `MONGO_URI` and `PORT`.
3. Install deps
```sh
npm install
```

## Run
- Dev (auto-reload):
```sh
npm run dev
```
- Prod:
```sh
npm start
```

Open http://localhost:3000

## CRUD
- List: GET `/items`
- Create: POST `/items`
- Update: PUT `/items/:id`
- Delete: DELETE `/items/:id`

## Notes
- Tailwind CSS is loaded via CDN.
- Method override uses `?_method=PUT` or `DELETE`.
- Data model: `{ title: string, description?: string, done: boolean }`.
