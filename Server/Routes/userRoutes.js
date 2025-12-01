import express from "express";
import { create , getUsers, getUserById } from "../Controller/userController.js";

const route = express.Router();

route.post('/user', create);
route.get('/users', getUsers);
route.get('/:id', getUserById);


export default route;
