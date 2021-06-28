
const mongoose= require('mongoose')

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: String,
        required: true,
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true,
        trim: true, 
    },
    image: {
        type: Buffer 
    },
    directions: {
        type: String,
        required: true,
        trim: true 
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

}, {
    timestamps: true 
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe 