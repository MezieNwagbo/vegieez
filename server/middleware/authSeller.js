import jwt from "jsonwebtoken";

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies;

  if (!sellerToken) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    // console.log(tokenDecode);

    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      req.user = { userId: tokenDecode.id };
      next();
    } else {
      console.log("Not authorized");
      return res.json({ success: false, message: "Not authorized" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default authSeller;
