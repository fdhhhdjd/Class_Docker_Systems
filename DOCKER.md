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
    sudo snap install docker
    sudo apt install docker-compose
    # restart computer is yet 

    # Download Makefile
    sudo apt install make 
```

## 2. Hello Docker
```bash
    docker build -t hello-docker .
    docker run hello-docker
```

## 2. React Docker
```bash
    docker image build -t react-docker . && docker run react-docker
    docker run -p 5173:5173 react-docker
    docker container prune
    docker compose up -d --build
```