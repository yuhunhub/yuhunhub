self.addEventListener('fetch', (event) => {
  const url = event.request.url
  if (url.indexOf('https://yuhunhub.tql8.com') === 0 ||
    url.indexOf('http://localhost') === 0 ||
    url.indexOf('https://unpkg.com') === 0) {
    handleRequest(event)
  }
})

function handleRequest (event) {
  const url = new URL(event.request.url)
  if (url.pathname.indexOf('/hub') === 0) {
    return
  }
  event.respondWith(
    caches.open('yuhunhub').then(cache => {
      return fetch(event.request).then(netwokResp => {
        cache.put(event.request, netwokResp.clone())
        return netwokResp
      })
    }).catch(() => {
      return caches.match(event.request)
    })
  )
}
