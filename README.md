# Mod12 SBA: Build a RESTful Server

This is a solution using Express to the [Module 12 SBA](https://ps-lms.vercel.app/curriculum/se/318/sba).  

## Table of contents

- [Overview](#overview)
  - [Key Concepts](#key-concepts)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Reflections](#reflections)
  - [Useful resources](#useful-resources)
- [Acknowledgments](#acknowledgments)

## Overview

This project follows RESTful API principles to ensure a clean, scalable, and predictable architecture for web services.

### Key Concepts
- [] Client-Server Separation: The frontend and backend operate independently. Clients interact with the server via clearly defined endpoints (URIs).

- [] Stateless Requests: Each request includes all necessary information. The server does not remember previous interactions.

- [] Uniform Interface:

    - [] Resource-Based URLs: Use nouns to represent resources (e.g., /api/movies/search).

    - [] HTTP Methods:

        - [] GET: Retrieve data

        - [] POST: Create new data

        - [] PUT / PATCH: Update data

        - [] DELETE: Remove data

    - [] Standard Format: Data is exchanged in JSON.

Understanding these REST principles is essential before working with or extending this API.

### Screenshot

![](./assets/images/Solution_1.jpg)

![](./assets/images/Solution_2.jpg)

![](./assets/images/Solution_3.jpg)

### Links

- Solution URL: [GitHub: movie-finder-api](https://github.com/DblRH600/movie-finder-api/tree/main)
- Live Site URL: []()

## My process

### Built with

- NPM
- Node.js
- Express
- Axios
- DOTENV

### What I learned

Building the *Movie-Finder-API* tested my understanding of ***Express*** and how to set up the ***Project Structure & Configuration*** correctly. Additionally, the project further tested my understanding of how to setup ***express.Router()*** routes as well as futher practice with utilizing **try** / **catch** blocks for **error** handling using ***async*** / ***await*** functions  


```js movieController
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
    const apiResponse = await movieClient.get(`/?s=${movieId}`)

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
```

### Continued development

I need to build futher understanding on where the **useState** hook should be placed and when to utilize ***props*** when passing functionality between parent and component connections. Understanding how to develop custom hooks was crucial to the productivity and reusability of the code blocks. This project also tested the ability to use context functions effectively.

### Reflections

### Useful resources

- [Documentation: React](https://react.dev/reference/react) - ***React.dev*** provides useful documentation and examples for how to use **useState** and **useCallback** hooks.

- [Documentation: The Bitly API](https://dev.bitly.com/?_gl=1*18syhe2*_gcl_au*MzI4MzI3MzM5LjE3NDkyMjY0MzcuMTcwMTE2NjY1NC4xNzQ5MjI5MTQ3LjE3NDkyMjkyMTE.) - This is site helped with my understanding of how to use the API for this website.

## Acknowledgments

I want express aprpeciation to Abraham Tavarez Colton Wright for their help with understading how to connect the ***API Token*** from *bitly.com*, and how **useState** should be implemented in order for its use for each **component** impacted. Additional shout out to [Dev-Lawrence](https://www.youtube.com/watch?v=BKwu82wekLU&t=136s) for the reat tutorial on the Frontend Mentor project
