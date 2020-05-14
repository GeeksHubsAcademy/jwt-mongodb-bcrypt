import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/user-jwt', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(console.error);