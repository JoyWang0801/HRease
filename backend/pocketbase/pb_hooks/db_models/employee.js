
module.exports = {
    validateEmployee: (data) => {
        console.log(JSON.stringify(data.firstName));
        // Store dependent information in a separate collection called dependents
        const dependentCollection = $app.dao().findCollectionByNameOrId("dependents");
        const dependentRecord = new Record(dependentCollection);
        const dependentForm = new RecordUpsertForm($app, dependentRecord);
        dependentForm.loadData({
            "relationship":data.relationship,
            "name":data.dependentName,
            "email":data.dependentEmail,
            "phoneNumber":data.dependentPhoneNumber
        })
        dependentForm.submit()

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
            "phoneNumber":data.phoneNumber,
            "dependent": dependentRecord.id // record id
        })
        form.submit()

        return data.firstName;
    }
}