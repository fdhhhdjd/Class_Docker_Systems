# Get file .env
include .env
export $(shell sed 's/=.*//' .env)

# Folder constants
DOCKER_COMPOSE := docker-compose.yml
DOCKER_COMPOSE_REGISTRY := docker-compose.registry.yml

DOCKER_IMAGE_NAME := nguyentientai/class_fullstack:postgres-docker
DOCKERFILE_PATH := ./docker/dev/Dockerfile.dev

# Run auto
default:
	docker ps

############# RUN #############
run-build:
	docker-compose -f $(DOCKER_COMPOSE) up -d --build
	
run-down:
	docker-compose -f $(DOCKER_COMPOSE) down

############# Push Registry #############
image-tag:
	docker build -t $(DOCKER_IMAGE_NAME) -f $(DOCKERFILE_PATH) .

push-registry:
	docker push $(DOCKER_IMAGE_NAME)

update-registry:
	make image-tag
	make push-registry



