const express = require("express");

const app = express();


app.get("/",(req,res)=>{
    res.send("server is not busy it is on /")
})
app.get("/products",(req,res)=>{
        res.send([
        
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    category: "beauty",
    brand: "Essence",
    price: 9.99,
    rating: 2.56,
    discountPercentage: 10.48,
    stock: 99,
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    ],
  },
  {
    id: 2,
    title: "Eyeshadow Palette",
    category: "beauty",
    brand: "Essence",
    price: 19.99,
    rating: 4.5,
    discountPercentage: 15.2,
    stock: 50,
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette/1.webp",
    ],
  },
  {
    id: 3,
    title: "Powder Canister",
    category: "beauty",
    brand: "Glamour Beauty",
    price: 14.99,
    rating: 4.2,
    discountPercentage: 8.5,
    stock: 75,
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    ],
  },

        ]
    )
})
app.listen(3000, () => {
  console.log("Server running on port 300");
});