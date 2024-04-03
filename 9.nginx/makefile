# Get file .env
include .env
export $(shell sed 's/=.*//' .env)

# Folder constants
DOCKER_COMPOSE := docker-compose.yml
DOCKER_COMPOSE_REGISTRY := docker-compose.registry.yml
CONTAINER_NGINX=nginx-proxy

# Run auto
default:
	docker ps

############# RUN #############
run-script:
	docker exec -it ${CONTAINER_NGINX} /usr/local/bin/scripts/htpasswd.sh

run-build:
	docker-compose -f $(DOCKER_COMPOSE) up -d --build
	make run-script
	
run-down:
	docker-compose -f $(DOCKER_COMPOSE) down





