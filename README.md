## Clone the repository
```bash
git clone https://github.com/tansibMuttakin/nginx-reverse-proxy-ssl.git
cd nginx-reverse-proxy-ssl
```
## Generate SSL certificates (if not already present)
```bash
openssl req -x509 -newkey rsa:2048 -nodes -keyout certs/server.key -out certs/server.crt -days 365
```
## Build and start containers
```bash
docker compose build
docker compose up -d
```

## Access the App
HTTPS (reverse proxy): https://localhost

