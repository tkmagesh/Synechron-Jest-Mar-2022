import axios from 'axios'

async function getProducts(){
    const response = await axios.get('http://localhost:3030/products')
    return response.data
}

export default { getProducts }