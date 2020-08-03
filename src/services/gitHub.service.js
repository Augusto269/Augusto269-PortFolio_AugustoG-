import axios from 'axios';
//https://api.github.com/repos/Augusto269/Augusto269-PortFolio_AugustoG-/readme
export const getRepositories = () => {
   return axios
        .get(`https://api.github.com/users/Augusto269/repos`)
    .then(Response => {
        return Response
    }).catch(err=>{
        return err
    })
  };
