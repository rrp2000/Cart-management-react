const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId


const cartSchema = new mongoose.Schema(
    {
        userId : {
            type: ObjectId,
            ref: "User",
            required: true,
            unique: true
        },
        items: [{
            _id:false,
            productId: {
                type: ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                default :1
            },
        }],

        totalPrice: { type: Number, required: true,default: 0 },
        
        totalItems: { type: Number, required: true , default: 0 },
        
    }, { timestamps: true }

)

module.exports = mongoose.model("Cart", cartSchema);