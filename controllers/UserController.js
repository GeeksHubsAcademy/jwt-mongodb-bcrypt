import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const UserController = {
    async register(req, res) {
        try {
            req.body.role = 'user';
            req.body.password = await bcrypt.hash(req.body.password, 9);
            const user = await User.create(req.body)
            res.status(201).send(user);
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problema trying to register the user'
            })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                $or: [{
                    email: req.body.email
                }, {
                    username: req.body.username
                }]
            });
            if (!user) {
                return res.status(400).send({
                    message: 'Wrong Credentials'
                });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.hash);
            if (!isMatch) {
                return res.status(400).send({
                    message: 'Wrong Credentials'
                });
            }
            // const token = jwt.sign({});
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'There was a problema trying to login'
            })
        }
    }
}

export default UserController;