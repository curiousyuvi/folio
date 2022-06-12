# development

build-dev:
	cd folio-client && make build
	cd folio-server && make build

run-dev:
	docker-compose -f docker-compose-dev.yaml up

down-dev:
	docker-compose -f docker-compose-dev.yaml down
	docker image rm folio-server folio-client



# local

build-local:
	cd folio-client && make build-local
	cd folio-server && make build

run-local:
	sudo docker-compose-local up

# production

build-production:
	cd folio-client && make build-production
	cd folio-server && make build

run-production:
	sudo docker-compose-production up
