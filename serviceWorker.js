const staticRounikData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/img/blob.svg",
  "/assets/img/portfolioImage_withBackground_final.jpg",
  "/assets/img/hi_left.png",
  "/assets/img/contact.jpg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
  "/assets/img/portfolio/ai-tictactoe.png",
  "/assets/img/portfolio/cafe_management.png",
  "/assets/img/portfolio/Graph visualizer.png",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticRounikData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
