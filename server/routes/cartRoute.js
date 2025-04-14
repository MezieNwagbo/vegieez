import express from "express";
import authUser from "../middleware/authUser";
import { updateCart } from "../controllers/cartController";

const cartRouter = express.Router();

cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
