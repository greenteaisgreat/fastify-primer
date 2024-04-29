import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", (req, res) => {
  res.send({ message: `Hello World!` });
});

//same exact functionality as fastify.get on line 7
fastify.route({
  method: "GET",
  url: "/hello/:name",
  handler: (req, res) => {
    return {
      message: `Hello there, ${req.params.name}!`,
    };
  },
});

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error("There was an error: ", err);
    process.exit(1);
  }
});
