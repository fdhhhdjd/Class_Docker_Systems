# Learn Docker

## 1. DOWNLOAD docker ubuntu
```bash
    sudo apt update
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
    apt-cache policy docker-ce
    sudo systemctl status docker
    sudo usermod -aG docker ${USER}
    su - ${USER}
    # restart computer is yet 
```

## 2. Hello Docker
```bash
    docker build -t hello-docker .
    docker run hello-docker
```