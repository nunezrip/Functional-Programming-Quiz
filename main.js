
var items =[
    {id: '123456', name: 'water', price: 1.99, description: 'bottled water'},
    {id: '789012', name: 'beer', price: 7.99, description: 'imported beer'},
    {id: '456373', name: 'tuna', price: 3.99, description: 'water tuna'},
    {id: '456398', name: 'sauce', price: 1.99, description: 'tomatoe sauce'},
    {id: '902846', name: 'crackers', price: 1.99, description: 'saltine crackers'},

    ]
    
    class NewProducts {
        constructor(items){
            this.getNames()
            this.getSaleItems()
            this.getPriceItems()
            this.getOrderItems()
        }
       
        getNames(){
            return items.map(function(items){
                return items.name;    
           })
        }
    
        getSaleItems(){
            return items.filter(function(items){
                return items.price < 6.00
            })
        }
    
        getPriceItems(){
            var total = 0;
            return items.map(function(items){
                return items.price    
           })
        }

        getOrderItems(){
            this.getPriceItems
            var total = this.getPriceItems().reduce(function(acc, curr){
                return acc + curr

            })
            return total * 35
        }
    }
    

    let  ReadyMart = new NewProducts(items)
    console.log(ReadyMart.getNames())
    console.log(ReadyMart.getSaleItems())
    console.log(ReadyMart.getPriceItems())
    console.log(ReadyMart.getOrderItems())
  
    
    
    
    