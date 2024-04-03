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

## 3. React Docker
```bash
    docker image build -t react-docker . && docker run react-docker
    docker run -p 5173:5173 react-docker
    docker container prune
    docker compose up -d --build
```

## 4. Restarted Docker

```bash 
    sudo systemctl restart docker.socket docker.service
    # Move image
    sudo docker image rm -f $(sudo docker image ls -q)
```

## 5. Used image
```
    docker pull nguyentientai/class_fullstack:node-docker-taidev
    docker run -d -p 5000:5004 --name my_container nguyentientai/class_fullstack:node-docker-taidev
```

## 6. Check port and kill 
```
    sudo apt update
    sudo apt install net-tools
    sudo ss -tuln | grep :<port>
    sudo netstat -tuln | grep :<port>
    sudo kill <ID>
    sudo fuser -k 81/tcp
```

