up:
	docker compose up -d
down:
	docker compose down
logs:
	docker compose logs -f
restart:
	docker compose down -v
	docker compose up --build -d
ps:
	docker compose ps

clean:
	docker compose down -v

backend:
	docker compose exec backend sh

db:
	docker compose exec postgres psql -U postgres hello_db
