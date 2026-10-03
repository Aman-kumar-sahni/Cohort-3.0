import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
//kis user ne cart m add kiya hai uska id 
    //cartItem ka array iss aaryy m store hoga product id ,size ,quantity

})

const cartModel = mongoose.model("carts",cartSchema)
export default cartModel 