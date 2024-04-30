Fastify Hooks are methods that execute at a certain lifecycle event, such as an 'onRequest' or 'preParsing' hook. 'onRequest' is typically the first hook that will be executed within a Fastify lifecycle after a request is made. Once a hook is executed, it will be passed to every subsequent sub-component and/or plugin that follows the executed hook.

In Fastify, there are multiple Hooks that can be executed after every step within a Fastify request, which is essentially an HTTP request.

The Fastify application lifecycle in regards to Hooks is as follows:
(- designates a step)
(\* designates a hook)

-Incoming Request
-Routing
-Instance Logger
*onRequest Hook
*preParsing Hook
-Parsing
*preValidation Hook
-Validation
*preHandler Hook
-User Handler
-Reply
*preSerialization Hook
*onSend Hook
-Outgoing Response
\*onResponse Hook

The 'onRequest' hook is commonly used for client authentication, such as in a JSON web token, or attaching a user object after authentication. User objects contain specific identifying information that pertains to the client.

The 'preHandler' hook is used to transfer client identification data to the request object in order to pass that information on to the User Handler, which is a method used to handle the client's request. The 'preHandler' hook attaches a user object to the request, which will later be used in some HTTP method (such as a GET request) to verify the client's credentials, as well as what they're wanting to do.

Fastify also uses what are known as Decorators; Decorators are used in conjunction with Hooks to ensure that request/response cycles are very efficient. They attach properties to the native Fastify request object (or other objects) to ensure that serialization occurs via the Decorator and not the request object located within the native HTTP method, which would lead to slower performance.

An example of a Decorator is as follows:

fastify.decorateRequest('user', '')
fastify.decorateRequest('user', null)

In the first example, this indicates that a 'user' property type will be a string. In the second example, if you want to indicate the type of an object, such as an object literal or an array, you must provide the null keyword.

In a nutshell, Hooks are essentially preprocessors that handle client data prior to some method being executed and Decorators are used to ensure serialization of properties in native Fastify objects for wicked fast performance.

Fastify also contains what are known as Data Access Plugins, which are essentially ways to communicate via 3rd party data storage options, such as MongoDB, PostgreSQL or Redis.
