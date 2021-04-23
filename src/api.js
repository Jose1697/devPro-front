const BASE_URL = 'https://devpro-back.herokuapp.com';



async function callApi(endpoint, options = {}) {
  

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
          return callApi('/core/experto/');
        },
        
        listProyectos() {
          return callApi('/core/proyecto/');
        },



        create(badge) {
          return callApi(`/core/proyecto/`, {
            method: 'POST',
            body: JSON.stringify(badge),
          });

        },


        read(badgeId) {
            return callApi(`/core/proyecto/cliente/${badgeId}/`);
          },
        
        update(badgeId, updates) {
            return callApi(`/core/experto/${badgeId}/`, {
              method: 'PUT',
              body: JSON.stringify(updates),
            });
          },
    }
};





  export default api;