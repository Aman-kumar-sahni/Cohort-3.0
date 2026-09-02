const express = require("express")
const app = express()
app.use(express.json())
let user = []
app.post("/create", (req, res) => {
    const body = req.body
    user.push(body)
    res.status(200).json("user create successfully")

})

app.get("/", (req, res) => {
    res.send(user)
})

app.delete("/delete/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log(id)
    user = user.filter((val) => val.id !== id)

    res.status(200).json("user deleted successfully")
})

app.patch("/update/:id", (req, res) => {
    const id = Number(req.params.id);
    const name = req.body.name;

    const updateUser = user.find((val) => val.id === id);

    if (!updateUser) {
        return res.status(404).json("User not found");
    }

    updateUser.name = name;

    res.status(200).json("User updated successfully");
});
app.listen(3000, () => {
    console.log("server is running on port 3000")
});
