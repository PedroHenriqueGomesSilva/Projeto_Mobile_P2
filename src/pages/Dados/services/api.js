import axios from 'axios';


const api = axios.create({
  baseURL: 'https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new'
});


export default api;