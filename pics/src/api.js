import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Vaol0n2njyAwBuxQ8pRKZ4PaAcynoDBjdzpW4ApQeF8',
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
}

export default searchImages;