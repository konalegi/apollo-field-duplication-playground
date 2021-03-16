const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'base', url: 'http://localhost:6001' },
    { name: 'extending', url: 'http://localhost:6002' },
  ],
  debug: true,
});

(async () => {
  // const { schema, executor } = await gateway.load();

  // const server = new ApolloServer({ schema, executor });
  const server = new ApolloServer({
    gateway,
    subscriptions: false,
    // engine: {
    //   apiKey: config.get('engine.apiKey'),
    //   schemaTag: config.get('appEnv'),
    // },
  })

  server.listen({ port: 4001 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
