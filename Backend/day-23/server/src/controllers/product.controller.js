import productModel from "../models/product.model.js";
import imagekit from "../service/storage.service.js";
export const createProduct = async (req, res, ) => {
  
  try {
    const {
      name,
      description,
      brand,
      category,
      gender,
      price,
      variants,
    } = req.body;

    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one product image is required",
      });
    }
    


    const imageUrls = [];

    for (const file of files) {

  const result = await imagekit.files.upload({

    file: file.buffer.toString("base64"),
    fileName: file.originalname,
    folder: "snitch/product-images",
    
  });


      imageUrls.push(result.url);
    }

    const product = await productModel.create({
      name,
      description,
      brand,
      category,
      gender,
      images: imageUrls,
      price,
      variants,
      seller: req.user.userId,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: {
        product,
      },
    });
  } catch (error) {
    return res.status(500).json({
        message:"product creation failed",
        error:error.message
    })
  }
};

export const listProduct =async(req,res)=>{
 try {
   const {id}=req.params
  const product = await productModel.findById(id)
  if(!product)return res.status(404).json({
    message:"product not found "
  })
 await productModel.findByIdAndUpdate(id,{
  status:"published"
})
return res.status(200).json({
  message:"product listed successfully",
  
})

 } catch (error) {
  return res.status(500).json({
message:"failed to list product",
error:`${error.message}`
  })
 }
}

export const unlistProduct =async(req,res)=>{
 try {
   const {id}=req.params
  const product = await productModel.findById(id)
  if(!product)return res.status(404).json({
    message:"product not found "
  })
 await productModel.findByIdAndUpdate(id,{
  status:"unpublished"
})
return res.status(200).json({
  message:"product unlisted successfully",
  
})

 } catch (error) {
  return res.status(500).json({
message:"failed to unlist product",
error:`${error.message}`
  })
 }
}

export const listAllProductToSeller =async(req,res)=>{
  const allProduct = await productModel.find()
  return res.status(200).json({
    message:"all product listed  successfullly",
    data:{
      allProduct
    }
  })


}

export async function listAllProducts(req, res) {
  try {
    const products = await productModel.find({
      status: "published",
    });

    return res.status(200).json({
      success: true,
      message: "Products data fetched successfully",
      data: {
        products,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
}

