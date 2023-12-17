import { Router } from "express";

const router = Router();

router.get('/ping', (req, res) => {
    res.json({pong: true})
});

router.get('/random', (req, res) => {
    let randomNumber = Math.floor(Math.random() * 100);
    res.json({number: randomNumber})
})

router.get('/nome/:nome', (req, res) => {
    let nome = req.params.nome;

    nome = nome.charAt(0).toUpperCase() + nome.slice(1);
    res.json({message: `Olá, ${nome}`});
})

export default router;