import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import { OperatorRouter } from "./Routes/OperatorRoute.js";
import jwt, { decode } from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/operator", OperatorRouter);
app.use("/auth", adminRouter);

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) return res.json({ Status: false, Error: "Wrong Token" });
      req.id = decoded.id;
      req.role = decoded.role;
      next();
    });
  } else {
    return res.json({ Status: false, Error: "Not Authenticated" });
  }
};

app.get("/verify", verifyUser, (req, res) => {
  return res.json({ Status: true, role: req.role, id: req.id });
});

app.listen(3000, () => {
  console.log("Server is Running...");
});
