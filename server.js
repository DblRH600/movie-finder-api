import express from 'express'
import morgan from 'morgan'
import movieRoutes from './routes/movieRoutes.js'

const app = express()
const PORT = process.env.PORT || 3003

// ================ Middleware ===============
app.use(express.json())

app.use(morgan('dev'))

// ================ Routes ======================
/**
 * @description imported from movieRoutes
 */
app.use('/api', movieRoutes)

/**
 * GET route to test server is running
 */
app.get('/', (req, res) => {
  res.send('API is working')
})

try {
  app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
} catch (err) {
  console.error('Server failed to start: ', err)
}
