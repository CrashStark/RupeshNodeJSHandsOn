const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
//this is not a production
// usse secret key always define your secret key
const secretKey = "yourSecretKey";
app.get("/", (req, res) => {
    res.json({
        message: "a simple api"
    })
})
app.post('/login', (req, res) => {
    const user = {
        id: 1,
        username: "Anil",
        email: "ABC@test.com"
    }
    //never give expiration time in string ale=way give numbers else it wont work
    jwt.sign({ user }, secretKey, { expiresIn: 300 }, (err, token) => {
        console.log(token);
        res.json({ token });
    })
})
app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err){
            console.log(err)
            res.send({ result: "Invalid Token!!!" });
        }
        else {
            res.json({
                message: "profile accessed",
                authData
            })
        }
    })
})
function verifyToken(req, resp, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        resp.send({
            result: "Token is not valid"
        })
    }
}
app.listen(3000, () => {
    console.log("App is running on 3000");
})