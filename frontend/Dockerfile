FROM node:slim as builder
WORKDIR /app
COPY . ./
RUN npm install
RUN npm run build


FROM nginx:latest
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
