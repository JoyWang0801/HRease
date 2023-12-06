/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yimp910wamo5clw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c8qtpmza",
    "name": "isManager",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yimp910wamo5clw")

  // remove
  collection.schema.removeField("c8qtpmza")

  return dao.saveCollection(collection)
})
