import jwt from "jsonwebtoken";

export const adminLogin=async(req,res)=>{
    try{
        const { email, password } = req.body;
        if(!email || !password)
            return res
                .status(400)
                .json({ message: "All fields are required", success: false});

                if(
                    email !== process.env.ADMIN_EMAIL || 
                    password != process.env.ADMIN_PASSWORD
                ){
                    return res.json({ message: "Invalid credentials", success: false});
                }
                const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
                    expiresIn: "id",
                });
                res.cookies("token", token, {
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000,
                });
                return res
                    .status(200)
                    .json({ message: "Login successful", success: true, token});
    } catch (error){}
};

export const adminLogout = (req,res) => {
    res.clearCookie("token");
    res.json({ message: "Logout successfull", success: true});
};