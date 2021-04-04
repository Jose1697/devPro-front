const BASE_URL = 'https://devpro-2021.herokuapp.com';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
    badges: {


        list() {
          return callApi('/core/experto');
        },



        create(badge) {
          return callApi(`/core/experto`, {
            method: 'POST',
            body: JSON.stringify(badge),
          });

        },


        read(badgeId) {
            return callApi(`/core/experto/${badgeId}`);
          },
    }
};





  export default api;