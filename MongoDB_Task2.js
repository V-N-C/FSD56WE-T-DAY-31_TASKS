
//Find all the information about each products
db.collection.find({})

//Find the product price which are between 400 to 800
db.collection.find({ product_price: { $gte: 400, $lte: 800 }})

//Find the product price which are not between 400 to 600
db.collection.find({ product_price: { "$not": { $gte: 400, $lte: 800 } }})

//List the four product which are greater than 500 in price 
db.collection.find({"product_price": {"$gte": 500}}).limit(4)

//Find the product name and product material of each products
db.collection.find({},{ product_name: 1, product_material: 1})

//Find the product with a row id of 10
db.collection.find({id: "10"})

//Find only the product name and product material
db.collection.find({},{ product_name: 1, product_material: 1})

//Find all products which contain the value of soft in product material 
db.collection.find({product_material: { "$eq": "Soft" }})

//Find products which contain product color indigo  and product price 492.00
db.collection.find({ "$or": [{product_color: "indigo" },{product_price: 492.00 }]})

//Delete the products which product price value are 28
db.collection.aggregate([ { "$group": { "_id": { product_price: "$product_price" }, total: { $sum: 1 } } }, 
{ $match: { total: { $gt: 1 } } } ]).map(val=> db.collection.deleteMany({"product_price": val._id.product_price}))
