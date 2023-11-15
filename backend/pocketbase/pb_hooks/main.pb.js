routerAdd("GET", "/hello/:name", (c) => {
    let name = c.pathParam("name")

    return c.json(200, { "message": "Hello " + name })
})

routerAdd("GET", "/testRoute", (c) => {
    //let name = c.pathParam("name")

    return c.json(200, { "message": "Hello "})
})

routerAdd("POST", "/ohgg", (c) => {
    //let name = c.pathParam("name")

    return c.json(200, { "message": "Ohgg "})
})
onModelAfterUpdate((e) => {
    console.log("user updated...", e.model.get("email"))
}, "users")