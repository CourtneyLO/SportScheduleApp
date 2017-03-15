import express, { Router } from 'express';
import { index } from './controllers/Tournament';


const router = Router();

  router.route("/tournaments.json")
    .get(index);

export default router;
