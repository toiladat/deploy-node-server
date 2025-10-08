import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async function testRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get('/', async (request, reply) => {
    reply.send({
      message: 'anh dat cua ems'
    })
  })
}
