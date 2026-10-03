import  mongoose from "mongoose"


const productSchema = new mongoose.Schema({
// title
//description
//price 
//images

//seller
//status
//timestamps
//stock
//kis ne product create kia hai 

})

const productModel = mongoose.model("products",productSchema)
export default productModel