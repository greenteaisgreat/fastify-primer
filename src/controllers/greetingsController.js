//fastify uses plugins to act as endpoint directives, rather than express
//applications, which make use of routers to direct to a given endpoint

//specifying a response schema improves performance within fastify,
//as fastify serializes JSON formats very efficiently. this is REQUIRED
//in production settings for people that use your application!
const responseSchema = {
  response: {
    200: {
      properties: {
        message: { type: "string" },
      },
      required: ["message"],
    },
  },
};

//three params to indicate the:
//1.) fastify application server - fastify
//2.) optional headers - options
//3.) the termination of the controller once it's finished - done
const greetingsController = (fastify, options, done) => {
  fastify.get("/", { schema: responseSchema }, (req, res) => {
    return { message: `Hello, world!` };
  });

  fastify.get("/:name", { schema: responseSchema }, (req, res) => {
    return { message: `Hello, ${req.params.name}!` };
  });

  //must invoke done() to signal the end of the controller
  done();
};

// const options = {
//   schema: {
//     // query: {
//     //   properties: {
//     //     lastName: { type: "string" },
//     //   },
//     //   required: ["lastName"],
//     // },
//     params: {
//       properties: {
//         //defines the structure of the 'name' parameter
//         name: { type: "string" },
//       },
//       //not that necessary, as if you specify in the URL scheme that
//       //a param is there (:name), it's required by default
//       required: ["name"],
//     },
//     //allows you to handle different response codes
//     response: {
//       200: {
//         properties: {
//           message: { type: "string" },
//         },
//         required: ["message"],
//       },
//     },
//   },
// };

export default greetingsController;
