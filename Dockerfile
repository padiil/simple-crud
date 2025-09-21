# Gunakan image resmi Node.js versi 18 yang ringan
FROM node:18-slim

# Buat direktori kerja di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install semua dependensi dari package.json
RUN npm install

# Salin sisa kode aplikasi Anda
COPY . .

# Buka port
EXPOSE 3000

# Perintah default untuk menjalankan aplikasi Anda
CMD [ "node", "server.js" ]
