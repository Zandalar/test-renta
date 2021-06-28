const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

export const getCategories = () => {
  return fetch(process.env.NODE_ENV === 'production'
    ? '/categories'
    : 'http://localhost:3000/categories'
  )
    .then(checkResponse);
}

export const getProducts = () => {
  return fetch(process.env.NODE_ENV === 'production'
    ? '/products'
    : 'http://localhost:3000/products'
  )
    .then(checkResponse);
}