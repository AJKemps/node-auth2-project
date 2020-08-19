const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const UserRouter = require("../user/user-router");
const AuthRouter = require("../auth/auth-router");
const Protected = require("../auth/restricted-mw");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", Protected, UserRouter);

server.use("/api", AuthRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;
