import { Router } from "express";
import asyncHandler from "../middlewares/async-handler";
import activityController from "../../controllers/activity.controller";


export default (router: Router) => {
  router.get('/words', asyncHandler(activityController.words));
  router.post('/ranks', asyncHandler(activityController.ranks));
  router.use('*', asyncHandler(activityController.notFound));

  
  return router;
}