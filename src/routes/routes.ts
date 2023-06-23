import { Router, request } from "express";
import { getBalls, getBlog, getIndex, getLogin , getResult, getSetting, getTest } from "../controllers/controllers";

const router = Router();

router.get('/', getIndex ) 
router.get('/quiz', getTest)
router.get('/balls', getBalls)
router.get('/result', getResult)
router.get('/setting', getSetting)
router.get('/blog', getBlog)

router.get('/login', getLogin)

export default router;
