import express from "express";
import './config/mongoose.js';
import usersRouter from './routes/users.js';
import authenticate from './middleware/authenticate.js'
const app = express();
const PORT = 3000

app.use(express.json()) //si no lo pongo req.body es undefined


app.get('/auth', authenticate, (req, res) => {
    res.send({ user: req.user, message: 'Estas autorizado' })
})
app.use('/users', usersRouter)

app.listen(PORT, () => console.log('server running on port ' + PORT))