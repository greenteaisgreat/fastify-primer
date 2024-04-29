import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

const options = {
  schema: {
    query: {
      properties: {
        lastName: { type: "string" },
      },
      required: ["lastName"],
    },
    params: {
      properties: {
        //defines the structure of the 'name' parameter
        name: { type: "string" },
      },
      //not that necessary, as if you specify in the URL scheme that
      //a param is there (:name), it's required by default
      required: ["name"],
    },
    //allows you to handle different response codes
    response: {
      200: {
        properties: {
          message: { type: "string" },
        },
        required: ["message"],
      },
    },
  },
};

//same exact functionality as fastify.get above, just a different
//way to implement it; take note of the options object as well
// fastify.route({
//   method: "GET",
//   url: "/hello/:name",
//   //defines a JSON schema
//   schema: {
//     query: {
//       properties: {
//         lastName: { type: "string" },
//       },
//       required: ["lastName"],
//     },
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
//   handler: (req, res) => {
//     return {
//       //will give an error if the key doesn't match the response schema
//       // message2: `Hello there, ${req.params.name}!`
//       message: `Hello there, ${req.params.name} ${req.query.lastName}!`,
//     };
//   },
// });

try {
  fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(`There was a server error: ${err}`);
  process.exit(1);
}
