/*
 Navicat Premium Data Transfer

 Source Server         : mongo
 Source Server Type    : MongoDB
 Source Server Version : 40401
 Source Host           : localhost:27017
 Source Schema         : nftshopping-store

 Target Server Type    : MongoDB
 Target Server Version : 40401
 File Encoding         : 65001

 Date: 02/11/2021 18:35:12
*/


// ----------------------------
// Collection structure for creation
// ----------------------------
db.getCollection("creation").drop();
db.createCollection("creation");

// ----------------------------
// Documents of creation
// ----------------------------
session = db.getMongo().startSession();
db = session.getDatabase("nftshopping-store");
db.getCollection("creation").insert([ {
    _id: ObjectId("618112af282ebd884918be7c"),
    "creation_name": "第一個藝術品",
    creator: "是我喔",
    smallimageurl: "https://media.bleacherreport.com/w_800,h_533,c_fill/br-img-images/003/801/463/hi-res-fa0f8ca6e25a1235fe2efe97ca64cfa5_crop_north.jpg",
    properties: [
        "dog"
    ],
    amount: NumberInt("0"),
    price: NumberInt("1000"),
    "create_at": ISODate("2021-11-02T10:27:59.738Z"),
    "brand_id": "@woooo",
    "sale_way": "BUY_NOW",
    "sale_status": "WAIT_FOR_SALE",
    "sale_start_at": ISODate("2020-10-30T12:00:00.000Z"),
    "sale_end_at": ISODate("2022-10-30T12:00:00.000Z"),
    description: "是第一個喔",
    "contract_address": "0x73Eb55Ac4aa3157856B57B874FF9F94DDbf7F2C4"
} ]);
session.endSession();
