FROM nginx:1.25

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY 502.html /var/www/html/

EXPOSE 80

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
