import mongoose from 'mongoose';

import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'La contraseña es un campo requerido'],
    },
    roles: {
        type: String,
        enum: ['user', 'admin', 'Dios']
    },
    tokens: [String]
}, {
    toJSON: {
        transform: function(doc, ret) {
            delete ret.tokens;
            delete ret.password;
            return ret;
        }
    }
});
// UserSchema.methods.toJSON = function () {

// }
UserSchema.methods.generateAuthToken = function() {
    const user = this;
    const token = jwt.sign({ _id: user._id }, 'miMamaMeMima', { expiresIn: '2y' });
    return token;
}
const User = mongoose.model('User', UserSchema);
export default User;