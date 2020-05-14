import jwt from 'jsonwebtoken';
import User from '../models/User.js'
const authenticate = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, 'miMamaMeMima');
        const user = await User.findOne({
            _id: payload._id,
            tokens: token
        });
        if (!user) {
            return res.status(401).send({
                message: 'You are not authorized'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({ message: 'You are not authorized', error })
    }
}
export default authenticate;