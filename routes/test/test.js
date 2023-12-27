const express = require("express");
const { testControllerLogic } = require("../../controllers/testController");

const testRoute = express.Router();
//JavaScript HOF(Higher Order Function)

testRoute.get("/test/orders", testControllerLogic);
//exports area
exports.testRoute = testRoute;
