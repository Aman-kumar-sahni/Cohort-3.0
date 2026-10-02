
export const registerController =(req,res)=>{

    //req.body se email password aur name lo

    // check email se koi exist krta v hai phle se agar krta hai 400 status ke sath  error dikhado 


    //password ko hash mai convert kro 
    //database mai user ko create kro 
    //ab accesstoken aur refresh token genrate kro token mai rhega id  aur aur user ka role ya sirf id dal k chor skte hai baad mai id k baad pr role nikal lenge lekin bar bar role nikalne se better hai role aur id store krdo 
    //refresh token database mai id k basis pr update kro 
    //refresh token ko cokkie mai store kro 
    //accestoken response mai 
    // aur register successfully ho gya dikhado 

    res.status(201).json({
        message:"registered successfully"
    })
}

export const loginController =(req,res)=>{

    //req.body se email aur password lo 
    //check kro email se koi user exist krta hai agar nhi toh 400 status error dikhado 
    //password compare kro 
//passwordcompare krne pr false aya toh error dikha do unauthroized 401 (yha check kro mera status dikhaya hua shi hai ?qki unauthorized toh tab dikhana chahiye jab resoruce aacess kre yha 400 hoga kya )
// acesstoken create 
//refreshtoken create 
//cookie mai refreshtoken update then 
//database mai refresh token  update 
//response mai logged in successfully


    res.status(200).json({
        message:" user logged in successfully",
    })

    

}



export const refreshTokenController =(req,res)=>{
    //cookie se token ayega 
    //agar token nhi h cookie mai toh error 401 unauthorized 

    //token decode kia jayega 

    //decode krne pr agar token missmatch hua 401 error dikhado unauthorized hai  
    // ab decoed mai se id milega is id k basis pr user ko nikalo 
    //check kro refreshtoken cookie wala aur database wala same hai ya nhi hai ,agar same nhi hai toh phle db mai refreshtoken null kro aur unauthorized error dikha k return kr do 
    //refreshtoken create kro 
    //cookie mai save 
    //db mai refresh token update kro 
    //accesstoken create kro 
    //res mai token rotated successfully k sath accesstoken dikha do 
    
    

    res.status(200).json({
        message:"token rotated successfully",
    })
}


export const getMeController=(req,res)=>{
//accesstoken nikalo header se  authorization se 
//agar accesstoken nhi hai toh error 401 unauthorized inavlid token aur expired token
// ab iss token ko decoded kia jayega 
//agar token mismatch problem error  inavlid token 401 error 

//ab decoded se id nikalajayega 
//aur id ke basis pr user ko laaya jayega 
//res m 200 data fetched successfull aur data ..


    res.staus(200).json({
        message:"data fetached successfully"
    })
}

