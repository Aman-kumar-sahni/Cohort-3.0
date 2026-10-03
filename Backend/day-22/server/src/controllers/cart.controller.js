export const addToCart =async (req,res)=>{

    //accesstoken verify and decode 
    //agar role user nhi h toh return 403
    
//product id ayega params se 

//req.body se size quantity
//product id se product ayega 
//ab jo size select kia hai wo size product mai hai v ya nhi check kiya jayega 
//nhi hai toh size not available choose another one aur status code 400
//agar hai toh check kro jitna quantity slect kiya gya hai wo quantity kam hona cahhiye stock mai us size ka avialble se ya brabar hona chhaiye nhi toh error dedo not aviable much quantity 
// ab check kro kya cart phle se created hai 
//agar hai toh check kro jo item slect kia gya hai wo phle se cart mai hai agr hai toh update quantity agar nhi h toh cart m add kro 
//agar phle se cart nhi hai toh simply cart create kro
//aur ab cart mai add krdo using create method aur res 201 dikha do 



}

export const getMyCart = (req,res)=>{
    //check user request kiya hai agar nhi toh unauthorized 403
    //user ke id ke basis se cartmodel se data retrive kro 
    //agar data null aya res 200  no  item in the cart 


    //res 200 cart retrived successfully

}