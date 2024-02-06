const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
   res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
   const newProducts = products.map((products) => {
      const { id, name, image } = products;
      return { id, name, image };
   });
   res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
   //  console.log(req);
   //  console.log(req.param);
   const { productID } = req.params;

   const singleProduct = products.find(
      (products) => products.id === Number(productID)
   );
   if (!singleProduct) {
      return res.status(404).send("Product does not exist");
   }
   return res.json(singleProduct);
});

app.get("/api/products/:productID/review/:reviewID", (req, res) => {
   console.log(req.params);
   res.send("hello world");
});

app.get("/api/v1/query", (req, res) => {
   //console.log(req.query);
   const { search, limit } = req.query;
   let sortedProducts = [...products];

   if (search) {
      sortedProducts = sortedProducts.filter((products) => {
         return products.name.startsWith(search);
      });
   }
   if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit));
   }
   if (sortedProducts.length < 1) {
      //res.status(200).send("no products mathched your search");
      return res.status(200).json({ success: true, data: [] });
   }
   res.status(200).json(sortedProducts);

   res.send("hello world");
});

app.listen(5000, () => {
   console.log("server is listening on port 5000....");
});
