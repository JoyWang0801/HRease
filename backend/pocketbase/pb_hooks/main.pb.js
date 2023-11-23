
// function myCustomMiddleware(next) {
//     console.log("middle ware")
//
//     return (c) => {
//         console.log("inside return c")
//         return next(c) // proceed with the request chain
//     }
// }
THREE_MIN = 180000

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
    //console.log("In side GET testRoute")
    const val = c.request().body;
    //console.log(val);
    //const util = require(`${__hooks}/db_models/employee.js`)
    //let msg = util.validateEmployee(c)
    return c.json(200, { "message": `Hello`})
})

routerAdd("POST", "/personal", (c) => {
    console.log("In side POST personal")
    const data = $apis.requestInfo(c).data
    console.log(JSON.stringify(data))
    // const util = require(`${__hooks}/db_models/employee.js`)
    // let msg = util.validateEmployee(data)
    let currentTIme = new Date();
    let clockInTime = new Date(data.clockIn);
    let timeDiff = currentTIme - clockInTime;
    console.log(`Difference between clockIn time and process data time is ${timeDiff} millisecond`);

    if(timeDiff < THREE_MIN)
    {
        const collection = $app.dao().findCollectionByNameOrId("attendance")
        const record = new Record(collection)
        const form = new RecordUpsertForm($app, record)
        // or form.loadRequest(request, "")
        form.loadRequest(c, "");
        form.submit()
        return c.json(200, { "message": `Valid data, submitted`})
    }
    else
    {
        return c.json(405, {"message": "Invalid data"})
    }



})

onModelAfterUpdate((e) => {
    console.log("user updated...", e.model.get("email"))
}, "users")