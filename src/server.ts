import express from 'express'
import cors from 'cors'
import { engine } from 'express-handlebars'
import router from './routes/routes'

const server = express()
const port = 9090

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use("/", express.static("public"))


server.engine('.hbs', engine({ extname: ".hbs" }))
server.set('view engine', '.hbs')
server.set('views', './pages')

server.use(router);

server.listen(port, () => console.log(`Server is running on port ${port}`))