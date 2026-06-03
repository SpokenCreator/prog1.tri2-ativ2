const server = Bun.serve({
    routes: {
        "/api-debugger": Bun.file(`public/api-debugger.html`),
        "/test": {
            GET: () => Response.json({time: Date.now() }),
            PUT: () => Response.json({time: Date.now() }),
            POST: () => Response.json({time: Date.now() }),
            DELETE: () => Response.json({time: Date.now() }),
        }
    },
    fetch() {
        return new Response("Not Found", {status: 404})
    }
})

console.log(`⚡ http://localhost:${server.port}`)