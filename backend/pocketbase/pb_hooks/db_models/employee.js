
module.exports = {
    validateEmployee: (data) => {
        console.log(JSON.stringify(data.firstName));
        const collection = $app.dao().findCollectionByNameOrId("employeeInfo")

        const record = new Record(collection)

        const form = new RecordUpsertForm($app, record)

        form.loadData({
            "firstName":data.firstName,
            "lastName":data.lastName,
            "address":data.address,
            "dateOfBirth":data.dateOfBirth,
            "gender":data.gender,
            "city":data.city,
            "province":data.province,
            "postCode":data.postCode,
            "email":data.email,
            "phoneNumber":data.phoneNumber
            // Relation to another databse
            // "relationship":data.relationship,
            // "dependentName":data.dependentName,
            // "dependentEmail":data.dependentEmail,
            // "dependentPhoneNumber":data.dependentPhoneNumber
        })
        form.submit()

        return data.name;
    }
}