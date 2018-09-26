import axios from 'axios' ;

export default {
  get(url,params){
    return axios.get(url, {params})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}