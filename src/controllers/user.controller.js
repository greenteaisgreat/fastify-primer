import UserSchema from "../models/user.model.js";

const userController = {};

userController.getAllUsers = async (request, reply) => {
  try {
    await reply.send("Not Here Yet, OKAY?");
  } catch (error) {
    reply.status(500).send(error);
  }
};

userController.getUserById = async (request, reply) => {
  try {
    await reply.send("Not Here Yet, OKAY?");
  } catch (error) {
    reply.status(500).send(error);
  }
};

userController.createUser = async (request, reply) => {
  try {
    await reply.send("Not Here Yet, OKAY?");
  } catch (error) {
    reply.status(500).send(error);
  }
};

userController.updateUser = async (request, reply) => {
  try {
    await reply.send("Not Here Yet, OKAY?");
  } catch (error) {
    reply.status(500).send(error);
  }
};

userController.deleteUser = async (request, reply) => {
  try {
    await reply.send("Not Here Yet, OKAY?");
  } catch (error) {
    reply.status(500).send(error);
  }
};

export default userController;
