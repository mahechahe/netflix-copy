export const searchMovie = (search = 'Titanic') => {

    const URL = `
    https://api.themoviedb.org/3/search/movie?api_key=25142cdb852b2907300f51c2383d9f2e&language=en-US&query=${search}&page=1&include_adult=false`

    return fetch(URL)
        .then(respone => respone.json())
        .then(data => data)
}