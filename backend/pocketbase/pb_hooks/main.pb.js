const {validateEmployee} = require("/pb/db_models/employee");

routerAdd("GET", "/hello/:name", (c) => {
    let name = c.pathParam("name")
    try
    {
        console.log("hiiiiii");
        console.log(c);
        let msg = validateEmployee(c);
        return c.json(200, { "message": `Hello ${name} ${msg}`})

    }
    catch (err)
    {
        return c.json(200, err);
    }
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