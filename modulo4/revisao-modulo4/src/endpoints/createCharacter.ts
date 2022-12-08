import { Request, Response } from "express"
import { characters } from "../data"

export function createCharacter(
    req: Request,
    res: Response
): void {

    const { name, gender, description } = req.body
    console.log(req.headers["content-type"])
    characters.push({
        id: Date.now(),
        name,
        gender,
        description
    })
    res.status(201).end("Personagem criado!")
}