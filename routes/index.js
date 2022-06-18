const express = require("express");

const productRoute = require("./productRoute");
const todoRoute = require("./todoRoute");
const ReviewsRoute = require("./ReviewsRoute");
const authRoute = require("./authRoute");
const helper = require('../helpers/common')

module.exports = (app) => {
  app.get("/", (req, res) => {
    //  res.sendFile(__dirname+ '/index.html')
    return helper.sendResponseMsg(res, "Welcome to Node", true)


  });
  app.use("/api/products", productRoute);
  app.use("/api/todo", todoRoute);
  app.use("/api/reviews", ReviewsRoute);
  app.use("/api/auth", authRoute);
};

