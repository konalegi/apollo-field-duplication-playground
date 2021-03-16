
* `yarn` (install all dependencies)
* `foreman start` (if not installed run `gem install foreman`) - starts all servers with gateway

This example shows that solution https://www.apollographql.com/docs/federation/entities/#field-migration doesn't
work on the schemas with self-managed gateway

Try to add field `age: Int` to the type User on the `extending_server.js`