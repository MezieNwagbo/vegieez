import User from "../models/User.js";

//update User CartData : /api/cart/update

export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const { userId } = req.user;

    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
