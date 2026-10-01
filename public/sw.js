// わくたん 最小構成のService Worker
// ネットワークを優先し、オフライン時のみキャッシュから返す（ネットワークファースト）。
// ドリル内容は日々更新されるため、オンライン時に古い内容を出さないことを優先している。

const CACHE_NAME = "wakutan-cache-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // GET以外（フォーム送信等）はそのままネットワークに任せる
  if (request.method !== "GET") return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request).then((cached) => cached || Response.error()))
  );
});
