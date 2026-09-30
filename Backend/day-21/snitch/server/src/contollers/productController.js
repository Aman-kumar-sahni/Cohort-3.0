

export const createProductController =(req,res)=>{
    console.log(req.body)
    console.log(req.files)
    res.status(200).json({
        message:"create product successfully"
    })

}

export default createProductController;