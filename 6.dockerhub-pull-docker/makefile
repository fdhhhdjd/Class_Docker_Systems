# Get file .env
include .env
export $(shell sed 's/=.*//' .env)

# Folder constants
DOCKER_COMPOSE_REGISTRY := docker-compose.registry.yml

# Folder copy
FODLER_DOCKER := /usr/src/app/
FODLER_HOST := ./
ID_CONTAINER := de618a0f6981

# Run auto
default:
	docker ps


############# Dev #############
run-build-registry:
	docker-compose -f $(DOCKER_COMPOSE_REGISTRY) up -d --build	

############ Copy #############
run-copy:
	docker cp $(ID_CONTAINER):$(FODLER_DOCKER) $(FODLER_HOST)