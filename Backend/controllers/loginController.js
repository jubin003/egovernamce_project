import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login request:", email, password);

    const admin = await Admin.findOne({ email: email.trim() });

    if (!admin) {
      return res.status(404).json({ msg: "wrong email" });
    }

    if (admin.password !== password) {
      return res.status(404).json({ msg: "wrong password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({ token });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default loginAdmin;
