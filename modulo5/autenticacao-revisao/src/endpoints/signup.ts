import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase'
import { User } from '../model/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'

export async function singup(req: Request, res: Response) {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            res.status(422).send("Insira corretamente as informações de 'name', 'email', 'password', 'role'")
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if (user) {
            res.status(409).send('Esse email já está cadastrado')
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hashPassword, role)
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generete({ id, role })

        res.status(201).send({ message: 'Usuário criado com sucesso', token })

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}