# Nginx
```
    /etc/init.d/nginx reload
    nginx -t
```

## Create password
```
    password=$(openssl passwd -apr1)
    printf "username:%s\n" "$password" >> /etc/nginx/.htpasswd
```




