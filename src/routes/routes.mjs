import { Router } from "express";
import UserController from "../controllers/UserController.mjs";

const router = Router();

router.route(/^\/usuario\/?$/i)
      .post( await UserController.createUser)
      .get( await UserController.listUser)

export default router;