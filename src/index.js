import Fastify from "fastify";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.routes.js";

const fastify = Fastify({ logger: true });
const PORT = process.env.PORT;

fastify.register(userRoutes, { prefix: "api/v1/users" });

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
    fastify.log.info(`Connected to port ${fastify.server.address().port}`);
  } catch (error) {
    fastify.log.error(`A server error occurred: ${error}`);
  }
};

start();
