var recordConstruct = require('../record.js')
var assert = require('assert')

describe("Record Object", function(){

  beforeEach(function(){
    record = recordConstruct("Depeche Mode", "Personal Jesus", "Pop", 10);
  })

  it("Should have an artist", function(){
    assert.strictEqual(record.getArtist(), "Depeche Mode");
  }),

  it("Should have a title", function(){
    assert.strictEqual(record.getTitle(), "Personal Jesus");
  }),

  it("Should have a genre", function(){
    assert.strictEqual(record.getGenre(), "Pop");
  }),

  it("Should have a price", function(){
    assert.strictEqual(record.getPrice(), 10);
  })

  it("Should print record properties as string", function(){
    assert.strictEqual(record.getProperties(), "Depeche Mode; Personal Jesus; Pop; 10");
  })
})