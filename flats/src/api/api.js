import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
});


export const flatsAPI = {
    async getFlats() {
        const data = await instance.get('/flats')
        return data.data
    },
    async likeToggle(id) {
        await instance.put(`/flats/${id}`)
    }
}




