const dbController = (fastify, options, done) => {
  fastify.get("/", async (req, res) => {
    const response = fastify.mongo;
  });
  done();
};

export default dbController;
