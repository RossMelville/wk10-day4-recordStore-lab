var Shop = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};


Shop.prototype.addRecord = function(record){
  this.inventory.push(record);
}

Shop.prototype.listInventory = function(){
  var list = "";
  this.inventory.forEach(function(record){
    list += record.getProperties() + "\n";
  })
  return list;
}

Shop.prototype.sellRecord = function(record){
  this.balance += record.getPrice();
  this.inventory.splice(this.inventory.indexOf(record),1);
}

Shop.prototype.totalWorth = function(){
  var total = this.balance;
  this.inventory.forEach(function(record){
    total += record.getPrice();
  })
  return total;
}

Shop.prototype.byGenre = function(genre){
  var string = ""
  for(var record of this.inventory){
    if(record.getGenre().toLowerCase() === genre.toLowerCase()){
      string += record.getProperties() + "\n";
    }
  }
  return string;
}

module.exports = Shop;