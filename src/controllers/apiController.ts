import { Request, Response } from "express";
import { Phrase } from "../models/Phrase";

export const ping = (req: Request, res: Response) => {
    return res.status(200).json({ message: "pong" });
}

export const random = (req: Request, res: Response) => {
  let randomNumber = Math.floor(Math.random() * 100);
  res.json({ number: randomNumber });
};

export const nome = (req: Request, res: Response) => {
  let nome = req.params.nome;

  nome = nome.charAt(0).toUpperCase() + nome.slice(1);
  res.json({ message: `Olá, ${nome}` });
};