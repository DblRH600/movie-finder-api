import { movieClient } from '../api/movieClient.js'

export const searchMovies = async (req, res) => {
  const movieTitle = req.query.title
  console.log('Query: ', movieTitle)

  try {
    if (!movieTitle) {
      return res
        .status(400)
        .json({ error: 'Title query parameter is required' })
    }

    const apiResponse = await movieClient.get(`/?s=${movieTitle}`)

    const data = apiResponse.data

    if (data.Response === 'False') {
      return res.status(404).json({ error: data.Error })
    }

    res.json(data.Search)
  } catch (error) {
    console.error("searchMovies error: ", error.message)
    if (error.res) console.error(error.res.data)
    res.status(500).json({ error: 'An error occurred while fetching movies' })
  }
}

export const getMovieDetails = async (req, res) => {
  const movieId = req.params.id

  try {
    const apiResponse = await movieClient.get(`/?i=${movieId}`)

    const data = apiResponse.data

    if (data.Response === 'False') {
      return res.status(404).json({ error: data.Error })
    }

    res.json(data)
  } catch (error) {
    console.error("getMovieDetails error: ", error.message)
    if (error.res) console.error(error.res.data)
    res
      .status(500)
      .json({ error: 'An error occurred while fetching movie details' })
  }
}
