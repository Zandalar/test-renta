function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export function getCategories() {
  return fetch(process.env.NODE_ENV === 'production'
    ? '/categories'
    : 'http://localhost:3000/categories'
  )
    .then(checkResponse);
}

export function getProducts() {
  return fetch(process.env.NODE_ENV === 'production'
    ? '/products'
    : 'http://localhost:3000/products'
  )
    .then(checkResponse);
}