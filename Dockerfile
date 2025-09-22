# Node.js versi 18 ringan
FROM node:18-slim

# Buat direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install semua dependensi dari package.json
RUN npm install

# Salin sisa kode aplikasi
COPY . .

# Buka port
EXPOSE 3000

# Perintah default untuk menjalankan app
CMD [ "node", "app.js" ]
