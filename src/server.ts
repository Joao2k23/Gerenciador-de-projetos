import express, { Router, Request, Response } from 'express'

const app = express()

const route = Router()

const PORT = 3333

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world' })
})

app.use(route)

app.listen(PORT, () => 'server running on port 3333')
