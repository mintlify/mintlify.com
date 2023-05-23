import { mintConfigSchema } from '@mintlify/validation'

export default function handler(_, res) {
  return res.status(200).send(mintConfigSchema)
}
