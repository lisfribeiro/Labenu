import * as bcrypt from 'bcryptjs';
import dotenv from 'dotenv'

dotenv.config()

export class HashManager {
  public async hash(text: string): Promise<string> {
      const rounds = Number(process.env.BCRYPTJS_COST)
      const salt = await bcrypt.genSalt(rounds)
      return bcrypt.hash(text, salt)
  }

  public async compare(text: string, hash: string): Promise<boolean> {
      return bcrypt.compare(text, hash)
  }
}  