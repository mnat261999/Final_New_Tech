const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/lucy123/image/upload/v1607699113/avatar/avatar_cugq40.png"
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)