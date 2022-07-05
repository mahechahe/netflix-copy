const APIKEY = '25142cdb852b2907300f51c2383d9f2e'
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

export const getTrendings = () => {
    return fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`)
        .then(response => response.json())
        .then(data => data)
}