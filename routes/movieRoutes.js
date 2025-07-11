import express from 'express';
import { searchMovies, getMovieDetails } from '../controllers/movieController.js';

const router = express.Router();

// ================= Middleware ==================
router.use(express.json())


// ==================== Routes ====================
/**
 * Get
 * @description /search route
 * @description /movie/:id route
 */
router.get('/search', searchMovies);
router.get('/movies/:id', getMovieDetails);


export default router;
