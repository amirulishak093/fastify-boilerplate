import type { FastifyPluginAsync } from "fastify";

const hello: FastifyPluginAsync = async (fastify, _opts): Promise<void> => {
  fastify.get("/", async (_request, reply) => {
    void reply.send({ hello: "world" });
  });
};

export default hello;
