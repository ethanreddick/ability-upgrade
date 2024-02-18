use actix_cors::Cors;
use actix_files as fs;
use actix_web::middleware::Logger;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use std::sync::atomic::{AtomicUsize, Ordering};

static VISIT_COUNT: AtomicUsize = AtomicUsize::new(0);

async fn index() -> impl Responder {
    let visits = VISIT_COUNT.fetch_add(1, Ordering::SeqCst) + 1;
    HttpResponse::Ok().body(format!("Number of visits: {}", visits))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Initialize the logger
    env_logger::init();

    HttpServer::new(|| {
        let cors = Cors::default()
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header();

        App::new()
            .wrap(Logger::default())
            .wrap(cors)
            // Define a scoped service for API routes
            .service(web::scope("/api").route("/visits", web::get().to(index)))
            // Serve static files
            .service(fs::Files::new("/", "../frontend/dist").index_file("index.html"))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
