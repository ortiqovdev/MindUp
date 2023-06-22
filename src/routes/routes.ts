import { Router, request } from "express";
import { getIndex } from "../controllers/controllers";

const router = Router();

router.get('/', getIndex ) 

export default router;
