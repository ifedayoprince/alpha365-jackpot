import { Router } from "express";
import { v4 as uuidv4 } from "uuid";


export const router = Router();

// Demo Route
router.get('/:id', async (req, res) => {
	res.send('Hello')
})
