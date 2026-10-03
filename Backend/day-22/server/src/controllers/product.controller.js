export const createProductController =async(req,res)=>{

    //title description price  size  req.body se 
    //verify seller hai ya by  accesstoken ko decode kr k uske andar role mai seller hai ya nhi 
    //agar nhii toh 403 error unauthorized aur return kr denge 
    

    //imagekit pr req.file se upload imagekit pr image upload jo v url ayega variable mai store 
    //now create product 
    
 


    res.status(200).json({
        message:" product created successfully"
    })
}

export const listAllProductToSeller =async (req,res)=>{
 
    //accesstoken decoded 
    //decoded.role mai seller h ya nhi hai 
    //agar nhi return 403 unauthorized access 

    //sara product mangwaoo using productModel.find aur then dikhado ...res pons emai 200 status ke sath 
}

export const listProducts =async(req,res)=>{
    //accesstoken  token verify and check seller role hona chahiye
    //nhi hai seller return 403 unauthorized 
    //param mai id ayega kis product ko list krna hai uska 

    // id ke basis pr product find kr k update status true 
    //res 200 products listed successfully 

}

export const unListProduct =async (req,res)=>{
    //accestoken token verify  then check seller hai ya nhi 
    //agar seller nhi h toh res mai error dikha do ..403 unauthorized 
    //id ayega req.params se 
    //id ke basis pr product find kro aur update kro status 
    // 200 res dikhado with message product Unlisted successfully 


}

export const  listAllProduct =(req,res)=>{
    //accesstoken ko verify kro decoed se role check kya ye seller hai 
    //agar seller nhi hai 403 wala eerror 
    // productModel.find({status:true}) ke basis pr sara product laoo 
    //ab isi  jo v product ka list us ko response maidikha do 200 status ke sath
    

}