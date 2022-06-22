const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/mydb";
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  manufacturer: String,
  unit_cost_price: Number,
  unit_selling_price: Number,
  in_stock: Number,
  category:String,
  expiry_date: String,
  barcode: Number,
  created_at:String,
  updated_at: String,
  reorder_level: String,
  products: Number,
});

const Product = mongoose.model("Product", productSchema);

app.get("/api/reorder", function(req, res) {
  var dataArr = [
    {
      name: "FARM FEAST MIXED FRUIT JUICE 500ML",
      image: "https://static-s3.supermart.ng/productImage/spxvl776.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: 100.00,
      unit_selling_price: 150.00,
      in_stock: 2,
      category: "Food and Beverage",
      expiry_date: "10-12-2019",
      barcode: 4010127456686,
      created_at: "10-12-2018",
      updated_at: null,
      reorder_level: "10",
      products: null,
    },
    {
      name: "FARM FEAST PINEAPPLE JUICE 500ML",
      image:
        "https://www.instacart.ng/wp-content/uploads/2019/07/IMG_20190612_172839.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: 200.00,
      unit_selling_price: 250.00,
      in_stock: 5,
      category: "Food and Beverage",
      expiry_date: "10-12-2020",
      barcode: 4010127456891,
      created_at: "10-12-2019",
      updated_at: null,
      reorder_level: "10",
      products: null,
    },
    
    {
      name: "5ALIVE TROPICAL PET DRINK 35CL.",
      image:
        "https://dr35ct9ol6mx2.cloudfront.net/images/thumbnails/800/915/detailed/23/5alive-tropical.jpg?t=1557859553",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: 100.00,
      unit_selling_price: 120.00,
      in_stock: 5,
      category: "Food and Beverage",
      expiry_date: "10-12-2021",
      barcode: 544900022858,
      created_at: "10-12-2020",
      updated_at: null,
      reorder_level: "10",
      products: null,
    },
  ];
  Product.find({}, function(err, data) {
    if (err) console.error(err);
    else {
      if (data.length == 0) {
        Product.create(dataArr, function(err, data) {
          if (err) console.error(err);
          return res.json(data);
        });
      } else {
        res.send(data);
      }
    }
  });
});

app.post("/api/reorder", function (req, res) {
  const productData = new Product(req.body);
  productData.save(function (err, data) {
    if (err) console.error(err);
    return res.json(data);
  });
});

app.post("/api/reorder/update", function(req, res) {
  Product.findByIdAndUpdate(
    req.body.id,
    {
      $set: {
        image: req.body.image,
        name: req.body.name,
        category: req.body.category,
        barcode: req.body.barcode,
        unit_cost_price: req.body.unit_cost_price,
        unit_selling_price: req.body.unit_selling_price,
        expiry_date: req.body.expiry_date,
        created_at: req.body.created_at,
      }
    },
    { new: true },
    (err, data) => {
      if (err) console.error(err);
      else {
        if (Product == data) {
          res.send("Data already inputed");
        } else {
          res.json(data);
        }
      }
    }
  );
});

app.delete("/api/reorder/delete/:id", function(req, res) {
  Product.findByIdAndDelete(req.params.id, (err, data) => {
    if (err) console.error(err);
    else {
      res.json(data);
    }
  });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
