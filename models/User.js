import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        trim: true,
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
});
const User = mongoose.model('User', UserSchema);
export default User;