import express from "express";
import './config/mongoose.js';
import usersRouter from './routes/users.js'
const app = express();
const PORT = 3000

app.use(express.json()) //si no lo pongo req.body es undefined

app.use('/users', usersRouter)

app.listen(PORT, () => console.log('server running on port ' + PORT))