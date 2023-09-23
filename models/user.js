const mongoose = require('./mongoose');

// Define a user schema
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
});

// Create a user model based on the schema
const User = mongoose.model('User', userSchema);

// Define other user-related routes, such as login, profile updates, etc.
// router.post('/login', userController.loginUser);
// router.put('/profile', userController.updateUserProfile);

module.exports = User;