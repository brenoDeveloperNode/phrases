import { Router } from "express";
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.get('/random', ApiController.random);

router.get('/nome/:nome', ApiController.nome);

router.get('/frases', ApiController.listPhrases);
router.get("/frases/:id", ApiController.getPhraseById);
router.post('/frases', ApiController.createFrase);
router.put("/frases/:id", ApiController.updatePhrase);
router.delete("/frases/:id", ApiController.deletePhrase);

export default router;