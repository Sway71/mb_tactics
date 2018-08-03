export function getRequest(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText
      });
    }
  })
  .catch(error => {
    console.log(error);
  });
}
