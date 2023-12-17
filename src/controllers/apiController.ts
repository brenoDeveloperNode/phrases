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

export const createFrase = async (req: Request, res: Response) => {
    let { author, txt } = req.body;

   let newPhrase = await Phrase.create({ author, txt });

   res.status(201).json({id: newPhrase.id, author, txt});
}

export const listPhrases = async (req: Request, res: Response) => {
    let list = await Phrase.findAll();

    res.json({list})
}

export const updatePhrase = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtém o ID da frase a ser atualizada do parâmetro da URL
  const { author, txt } = req.body; // Obtém os novos dados da frase do corpo da requisição

  try {
    const phraseToUpdate = await Phrase.findByPk(id);

    if (!phraseToUpdate) {
      return res.status(404).json({ error: "Frase não encontrada" });
    }

    await phraseToUpdate.update({ author, txt });

    return res.json({
      message: "Frase atualizada com sucesso",
      phrase: phraseToUpdate,
    });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Erro ao atualizar a frase", details: error.message });
  }
};

export const deletePhrase = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtém o ID da frase a ser deletada do parâmetro da URL

  try {
    const phraseToDelete = await Phrase.findByPk(id);

    if (!phraseToDelete) {
      return res.status(404).json({ error: "Frase não encontrada" });
    }

    await phraseToDelete.destroy();

    return res.json({ message: "Frase deletada com sucesso" });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Erro ao deletar a frase", details: error.message });
  }
};

export const getPhraseById = async (req: Request, res: Response) => {
  const { id } = req.params; // Obtém o ID da frase a ser buscada do parâmetro da URL

  try {
    const phrase = await Phrase.findByPk(id);

    if (!phrase) {
      return res.status(404).json({ error: "Frase não encontrada" });
    }

    return res.json({ phrase });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: "Erro ao buscar a frase", details: error.message });
  }
};