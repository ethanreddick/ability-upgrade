use actix_cors::Cors;
use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use std::sync::atomic::{AtomicUsize, Ordering};

// Counts how many times the server has been visited
static VISIT_COUNT: AtomicUsize = AtomicUsize::new(0);

async fn index() -> impl Responder {
    // Increment the visit count
    let visits = VISIT_COUNT.fetch_add(1, Ordering::SeqCst) + 1;
    HttpResponse::Ok().body(format!("Number of visits: {}", visits))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        let cors = Cors::default() // Allow all origins
            .allow_any_origin()
            .allow_any_method()
            .allow_any_header();

        App::new().wrap(cors).route("/", web::get().to(index))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
