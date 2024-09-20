FROM node:18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json turbo.json ./
RUN npm ci
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app
COPY --from=builder /app .

EXPOSE 6006
ENTRYPOINT [ "npx", "turbo", "run", "dev", "--parallel" ] 