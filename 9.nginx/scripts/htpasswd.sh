#!/bin/bash

if [ ! -f "$FOLDER_PASSWORD" ]; then
    touch "$FOLDER_PASSWORD"
fi

username=$USERNAME
password=$PASSWORD

encrypted_password=$(openssl passwd -apr1 "$password")

echo "$username:$encrypted_password" >> "$FOLDER_PASSWORD"

echo "Created account success 😍"

nginx -s reload