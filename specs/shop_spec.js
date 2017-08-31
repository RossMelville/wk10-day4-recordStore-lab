var Shop = require("../shop.js");
var assert = require("assert");

describe("Shop Object", function(){

  beforeEach(function(){
    shop = new Shop("C&R Music", "Edinburgh");
  })

  it("Should have a name", function(){
    assert.strictEqual(shop.name, "C&R Music");
  })

  it("Should have a City", function(){
    assert.strictEqual(shop.city, "Edinburgh");
  })

  it("balance should start at 0", function(){
    assert.strictEqual(shop.balance, 0)
  })

  it("inventory should be empty", function(){
    assert.strictEqual(shop.inventory.length, 0)
  })



})