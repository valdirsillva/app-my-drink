# Tecnica de multiplos estágios ( boas práticas )

# 1 Estágio inicial
FROM node:18-alpine AS builder
WORKDIR /app 
COPY . .
RUN npm install
RUN npm run build 

# 2 Estágio final
FROM node:18-alpine AS final
WORKDIR /app
COPY --from=builder ./app/dist ./dist
COPY package.json .
RUN npm install --production
CMD ["npm", "start"]
EXPOSE 8080 

