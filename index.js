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
  id: Number,
  user_id: Number,
  brand_id: Number,
  name: String,
  image: String,
  manufacturer: String,
  unit_cost_price: String,
  unit_selling_price: String,
  units: String,
  subcategory_id: Number,
  in_stock: Number,
  expiry_date: Number,
  barcode: String,
  created_at: Number,
  updated_at: Number,
  reorder_level: String,
  category_id: String,
  products: Number,
});

// schema into model
const Product = mongoose.model("Product", productSchema);

// your first API endpoint...
app.get("/api/reorder", function (req, res) {
  var dataArr = [
    {
      id: 2,
      user_id: 1,
      brand_id: 1,
      name: "FARM FEAST MIXED FRUIT JUICE 500ML",
      image: "https://static-s3.supermart.ng/productImage/spxvl776.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 2,
      expiry_date: null,
      barcode: "4010127456686",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 3,
      user_id: 1,
      brand_id: 1,
      name: "FARM FEAST PINEAPPLE JUICE 500ML",
      image:
        "https://www.instacart.ng/wp-content/uploads/2019/07/IMG_20190612_172839.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 5,
      expiry_date: null,
      barcode: "4010127456891",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 4,
      user_id: 1,
      brand_id: 1,
      name: "5alive Pulpy orange 40cl",
      image:
        "https://www.sodicgarden.com/wp-content/uploads/2018/07/5alive_pulpy_orange.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 1,
      expiry_date: null,
      barcode: "5449000113443",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 5,
      user_id: 1,
      brand_id: 1,
      name: "5ALIVE PULPY PET 85CL",
      image:
        "https://i0.wp.com/uyomall.inelsgroup.com/wp-content/uploads/2020/06/20200622_145748.jpg?fit=720%2C720&ssl=1",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000228512",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 6,
      user_id: 1,
      brand_id: 1,
      name: "PULPY 5ALIVE 85CL ORANGE",
      image:
        "https://images.yaoota.com/jUF0fFtHRRHToWMpeULl7PHHqSA=/trim/yaootaweb-production-ng/media/crawledproductimages/3e1b5d26b793a570109a9d46c71f96364e0df8a9.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 15,
      expiry_date: null,
      barcode: "5449000228512",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 7,
      user_id: 1,
      brand_id: 1,
      name: "5ALIVE TROPICAL PET DRINK 35CL.",
      image:
        "https://dr35ct9ol6mx2.cloudfront.net/images/thumbnails/800/915/detailed/23/5alive-tropical.jpg?t=1557859553",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 5,
      expiry_date: null,
      barcode: "544900022858",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 8,
      user_id: 1,
      brand_id: 1,
      name: "5 ALIVE TROPICAL 35CL",
      image:
        "https://dr35ct9ol6mx2.cloudfront.net/images/thumbnails/800/915/detailed/23/5alive-tropical.jpg?t=1557859553",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000228581",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 9,
      user_id: 1,
      brand_id: 1,
      name: "5alive Tropical 35cl",
      image:
        "https://dr35ct9ol6mx2.cloudfront.net/images/thumbnails/800/915/detailed/23/5alive-tropical.jpg?t=1557859553",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000228581",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 10,
      user_id: 1,
      brand_id: 1,
      name: "5ALIVE APPLE DRINK PET 35CL",
      image:
        "https://dr35ct9ol6mx2.cloudfront.net/images/thumbnails/800/915/detailed/23/5alive-apple.jpg?t=1549108755",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000228611",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 11,
      user_id: 1,
      brand_id: 1,
      name: "5alive Apple fruit 35cl",
      image:
        "https://www.mydrinks.com.ng/wp-content/uploads/2018/08/25-600x600.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000228611",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 12,
      user_id: 1,
      brand_id: 1,
      name: "5alive Cocopine 75cl",
      image:
        "https://hypermart.com.ng/wp-content/uploads/2020/05/spwiow535.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 4,
      expiry_date: null,
      barcode: "5449000231734",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 13,
      user_id: 1,
      brand_id: 1,
      name: "5ALIVE BERRYBLAST 75CL",
      image: "https://hubmart.com/wp-content/uploads/2020/02/14114.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 100,
      expiry_date: null,
      barcode: "5449000232151",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
    {
      id: 14,
      user_id: 1,
      brand_id: 1,
      name: "5 ALIVE CITRUS BURST 75CL",
      image:
        "https://www.rewardsng.com/wp-content/uploads/2018/05/5ALIVEAPPLE1LTR_part1-247x296.jpg",
      manufacturer: "ZARTECH LTD",
      unit_cost_price: "100.00",
      unit_selling_price: "100.00",
      units: "pcs",
      subcategory_id: 1,
      in_stock: 1,
      expiry_date: null,
      barcode: "5449000232168",
      created_at: null,
      updated_at: null,
      reorder_level: "10",
      category_id: "1",
      products: null,
    },
  ];
  Product.find({}, function (err, data) {
    if (err) console.error(err);
    else {
      if (data.length == 0) {
        Product.create(dataArr, function (err, data) {
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
  const data1 = new Product(req.body);
  data1.save(function (err, data) {
    if (err) console.error(err);
    return res.json(data);
  });
});

app.post("/api/reorder/update", function (req, res) {
  Product.findByIdAndUpdate(
    req.body.id,
    {
      $set: {
        name: req.body.name,
        category: req.body.category,
        barcode: req.body.barcode,
        unit_cost_price: req.body.price,
        expiry_date: req.body.expiryDate,
        created_at: req.body.created,
      },
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

app.delete("/api/reorder/delete", function (req, res) {
  Product.remove({ id: req.body.id }, (err, data) => {
    if (err) console.error(err);
    else {
      res.json(data);
    }
  });
});

const listener = app.listen(process.env.PORT || 5000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
