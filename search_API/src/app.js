// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");

fastify.register(cors, {
  // put your options here
  origin: "*",
});

fastify.register(require("@fastify/mongodb"), {
  forceClose: true,

  // with docker-compose
  url: "mongodb://mongo:27017/quiz_bdd_in_docker",
  // with run le dockerfile not with avec docker-compose !!
  // url: 'mongodb://172.17.0.2:27017/quiz_bdd_in_docker'
});

// Declare a route
fastify.get("/", function handler(request, reply) {
  reply.send({ hello: "world !" });
});

// Run the server!
fastify.listen({ port: 3030, host: "0.0.0.0" }, (err) => {
  // fastify.listen({ port: 3030 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});

// Log when the MongoDB connection is established
fastify.after(() => {
  console.log("Connected to MongoDB");
});
