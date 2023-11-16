
// function myCustomMiddleware(next) {
//     console.log("middle ware")
//
//     return (c) => {
//         console.log("inside return c")
//         return next(c) // proceed with the request chain
//     }
// }

routerAdd("GET", "/hello/:name", (c) => {
   // const util = require(`${__hooks}/db_models/employee.js`)

    //let name = c.pathParam("firstName")
    try
    {
        console.log("hiiii")
        let msg = util.validateEmployee(c)
        return c.json(200, { "message": `Hello Sana ${msg}`})

    }
    catch (err)
    {
        return c.json(200, {"message": `${err}`});
    }
})

routerAdd("GET", "/testRoute", (c) => {
    console.log("In side GET testRoute")
    const val = c.request().body;
    console.log(val);
    //const util = require(`${__hooks}/db_models/employee.js`)
    //let msg = util.validateEmployee(c)
    return c.json(200, { "message": `Hello`})
})

routerAdd("POST", "/testRoute", (c) => {
    console.log("In side POST testRoute")
    const data = $apis.requestInfo(c).data
    //console.log(JSON.stringify(data))
    const util = require(`${__hooks}/db_models/employee.js`)
    let msg = util.validateEmployee(data)
    return c.json(200, { "message": `Hello ${msg}`})
})

routerAdd("POST", "/ohgg", (c) => {
    //let name = c.pathParam("name")

    return c.json(200, { "message": "Ohgg "})
})
onModelAfterUpdate((e) => {
    console.log("user updated...", e.model.get("email"))
}, "users")