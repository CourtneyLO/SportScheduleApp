import express, { Router } from 'express';
import { index } from './controllers/Tournaments';


const router = Router();

  router.route("/", (req, res, next) =>
    .get(index)
  )

export default router;
