FROM nginx:1.25.2-alpine
EXPOSE 80 443
COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf