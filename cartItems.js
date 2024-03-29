//import express
const express = require("express");
//add router for cart - splits routes into separate modules
const cart = express.Router();


const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres",
  password: "",
  host: "localhost",
  port: 5432,
  database: "ExpressShopDB",
  ssl: false
});

cart.get("/", (req, res) => {
    pool.query("SELECT * FROM shoppingcart;")
    .then ( (results) => {
        res.send(results.rows);
    })
    .catch ( (err) => {
        res.send(err);
    })
});

cart.post("/", (req, res) => {
    let data = req.body;

    if ( !data.count ) {
        data.count = 1;
    }
    pool.query("INSERT INTO shoppingcart (product, price, count) values($1::text, $2::real, $3::int)",[data.product, data.price, data.count])
    .then( () => {
        res.status(201);
        res.send(data.body);
    })
});

cart.put("/:id", (req, res) => {
    console.log(req.body, req.params);
    pool.query("UPDATE shoppingcart SET count=$1::int WHERE id=$2::int", [req.body.count, req.params.id])
    .then( () => {
        res.send("Cart Item Updated!");
    })
    .catch( (err) => {
        res.send(err);
    })
});

cart.delete("/:id", (req, res) => {
    pool.query("DELETE FROM shoppingcart WHERE id=$1::int", [req.params.id])
    .then( () => {
        res.status(201);
        res.send("Cart Item Deleted!");
    })
});

module.exports = cart;
