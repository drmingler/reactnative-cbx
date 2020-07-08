const URL = "https://reqres.in/api";

const headers = {
  Accept: "application/json"
};

export const getFriends = () =>
  fetch(`${URL}/users?page=2`, {
    method: "GET",
    headers
  })
    .then(response => response.json())
    .then(response => response.data)
    .catch(response => response);

export const login = data =>
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      ...headers,
      "content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())

