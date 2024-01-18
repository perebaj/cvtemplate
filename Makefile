.PHONY: dev/start
dev/start:
	docker-compose up -d

.PHONY: dev/stop
dev/stop:
	docker-compose down

.PHONY: dev/restart
dev/restart:
	docker-compose restart

## Dev container logs
.PHONY: dev/logs
dev/logs:
	docker-compose logs -f app

.PHONY: dev/cleanup
dev/cleanup:
	docker-compose down --remove-orphans --rmi all --volumes

