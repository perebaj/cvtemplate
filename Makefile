## Start
.PHONY: dev/start
dev/start:
	docker-compose up -d

## Stop
.PHONY: dev/stop
dev/stop:
	docker-compose down

## Restart the dev env
.PHONY: dev/restart
dev/restart:
	docker-compose restart

## Dev container logs
.PHONY: dev/logs
dev/logs:
	docker-compose logs -f app

## Cleanup the dev environment
.PHONY: dev/cleanup
dev/cleanup:
	docker-compose down --remove-orphans --rmi all --volumes

## Display help for all targets
.PHONY: help
help:
	@awk '/^.PHONY: / { \
		msg = match(lastLine, /^## /); \
			if (msg) { \
				cmd = substr($$0, 9, 100); \
				msg = substr(lastLine, 4, 1000); \
				printf "  ${GREEN}%-30s${RESET} %s\n", cmd, msg; \
			} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
