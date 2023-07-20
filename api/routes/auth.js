const router=require("express").Router();
const User=require("../models/User");
const bcrypt=require('bcrypt');
const jwt = require("jsonwebtoken");


router.post("/register", async (req,res)=>{
    const salt=await bcrypt.genSalt(10);
    const hashedPass=await bcrypt.hash(req.body.password,salt);
    const newUser=new User({
        username: req.body.username,
        email:req.body.email,
        password:hashedPass,
    });
    try{
        const savedUser= await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                username: req.body.username
            }
        )
        !user && res.status(400).json("No such user exist");
         console.log(user);
        const validated=await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("Wrong password");
        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;