/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2g5shnyzpbb2hkx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d6blxldk",
    "name": "lat",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "de5jiyvs",
    "name": "long",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2g5shnyzpbb2hkx")

  // remove
  collection.schema.removeField("d6blxldk")

  // remove
  collection.schema.removeField("de5jiyvs")

  return dao.saveCollection(collection)
})
