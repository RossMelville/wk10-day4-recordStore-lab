var Shop = require("../shop.js");
var recordConstructor = require("../record.js");
var assert = require("assert");

describe("Shop and Record integration", function(){

  beforeEach(function () {
    shop = new Shop("C&R Music", "Edinburgh");
    record = recordConstructor("Depeche Mode", "Personal Jesus", "Pop", 10);
    record2 = recordConstructor("Oasis", "Whats the Story Morning Glory", "Pop", 10);
  })

  it("can Add to shop inventory", function(){
    shop.addRecord(record);
    assert.strictEqual(shop.inventory[0], record);
  })

  it("Should list the shop inventory", function(){
    shop.addRecord(record);
    shop.addRecord(record2);
    assert.strictEqual(shop.listInventory(), "Depeche Mode; Personal Jesus; Pop; 10" + "\n" + "Oasis; Whats the Story Morning Glory; Pop; 10" +"\n")
  })

  it("can purchase a record and update the balance", function(){
    shop.addRecord(record);
    shop.addRecord(record2);
    shop.sellRecord(record);
    assert.strictEqual(shop.balance, 10);
  })

  it("when record sold updates inventory", function(){
    shop.addRecord(record);
    shop.addRecord(record2);
    shop.sellRecord(record);
    assert.strictEqual(shop.inventory[0], record2)
  })

  it("should return total of stock and balance", function(){
    shop.addRecord(record);
    shop.addRecord(record2);
    assert.strictEqual(shop.totalWorth(), 20)
  })

  it("should print all records by genre", function(){
    shop.addRecord(record);
    shop.addRecord(record2);
    assert.strictEqual(shop.byGenre("Pop"),"Depeche Mode; Personal Jesus; Pop; 10" + "\n" + "Oasis; Whats the Story Morning Glory; Pop; 10" +"\n")
  })

})