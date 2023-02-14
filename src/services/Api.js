
import axios from 'axios'

async function api() {


  await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error))
}
export default api