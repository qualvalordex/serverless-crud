USER=root

up:
	docker-compose up

sh:
	docker-compose exec --user=${USER} serverless-api sh