//fastify uses plugins to act as endpoint directives, rather than express
//applications, which make use of routers to direct to a given endpoint

//three params to indicate the:
//1.) fastify application server - fastify
//2.) optional headers - options
//3.) the termination of the controller once it's finished - done
const greetingsController = (fastify, options, done) => {
  fastify.get("/yo/:name", options, (req, res) => {
    res.send({ message: `Hello, ${req.params.name} ${req.query.lastName}!` });
  });

  //must invoke done() to signal the end of the controller
  done();
};
