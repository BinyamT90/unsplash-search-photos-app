import axios from 'axios';

const unsplash =  axios.create({
   baseURL : 'https://api.unsplash.com',
   headers : {
       Authorization : 'Client-ID efc699cf2d7a161125533da58d2219f9d42df9abf246b34934f24ccb37393b73'
   }
});

export default unsplash;