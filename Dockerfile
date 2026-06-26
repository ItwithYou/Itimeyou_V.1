FROM nginx:alpine
COPY index.html /usr/share/nginx/html/
COPY sw.js /usr/share/nginx/html/
COPY manifest.json /usr/share/nginx/html/
RUN printf 'server {\n  listen 8080;\n  root /usr/share/nginx/html;\n  index index.html;\n  location / { try_files $uri $uri/ /index.html; }\n  location /sw.js { add_header Service-Worker-Allowed /; add_header Cache-Control "no-cache"; }\n  location /manifest.json { add_header Content-Type "application/manifest+json"; }\n  gzip on;\n  gzip_types text/html text/css application/javascript application/json;\n}\n' > /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
