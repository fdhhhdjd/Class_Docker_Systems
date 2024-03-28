# Get file .env
include .env
export $(shell sed 's/=.*//' .env)

# Folder constants
DOCKER_COMPOSE_DEV := docker-compose.dev.yml
DOCKER_COMPOSE_PROD := docker-compose.prod.yml
DOCKER_COMPOSE_REGISTRY := docker-compose.registry.yml

DOCKER_IMAGE_NAME := nguyentientai/class_fullstack:node-docker-taidev
DOCKERFILE_PATH := ./docker/dev/Dockerfile.dev

# Run auto
default:
	docker ps

############# Dev #############
run-build-dev:
	docker-compose -f $(DOCKER_COMPOSE_DEV) up -d --build
	
run-down-dev:
	docker-compose -f $(DOCKER_COMPOSE_DEV) down

############# Dev #############
run-build-registry:
	docker-compose -f $(DOCKER_COMPOSE_REGISTRY) up -d --build	

############# Push Registry #############
image-tag:
	docker build -t $(DOCKER_IMAGE_NAME) -f $(DOCKERFILE_PATH) .

push-registry:
	docker push $(DOCKER_IMAGE_NAME)

update-registry:
	make image-tag
	make push-registry



