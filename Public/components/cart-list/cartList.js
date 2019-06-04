function ItemList (CartService) {
    const ctrl = this;
    ctrl.cart= [];
  
  
    ctrl.cartData = [
  
      {
      id:"0",
      product: "cat-food",
      price: "5",
      quantity: "1",
      },
      {
      id:"1",
      product: "dog-food",
      price: "5",
      quantity: "2",
      },
      {
      id:"2",
      product: "bird-food",
      price: "10",
      quantity: "2",
      },
      {
      id:"3",
      product: "fish-food",
      price: "1",
      quantity: "5",    },
      {
      id:"4",
      product: "turtle-food", 
      price: "4",
      quantity: "2",
   },
   {
    id:"5",
    product: "rabbit-food",
    price: "2",
    quantity: "1",
  }];

  
  // LOADS CART
      ctrl.cartList = () => {
        CartService.getCart()
  
        .then( (data) => {
          console.log(data);
  
          let cart = [];
          data.forEach(function(item) {
            let cartObj = {
              id: item.id,
              product: item.product,
              price: item.price,
              count: item.count,
            }
            cart.push(cartObj);
          });

          ctrl.cart = cart;
  
        })
  
        .catch( (error) => {
          console.log(error);
      })
  
      }  
    // POST - Adds item to cart
    ctrl.addToCart = (product, price, count) => {
      let item  = {
          product: product,
          price: price,
          count: count,
      }
      CartService.addItem(JSON.stringify(item))
      .then( () => {
        ctrl.cartList();
      })
  }
    
    ctrl.updateCartItem = (item, count) => {
      console.log(item.id);


      item.count = count;
  
      CartService.updateItem(item)
      .then( () => {
        ctrl.cartList();
      })
  }
  
  
    ctrl.deleteCartItem = (id) => {
      CartService.removeItem(id);
      ctrl.cartList();
  
  
  }
  
    ctrl.cartList();
  }
  angular.module("CartApp")
.component('cartList', {
    controller: ItemList,
    template: `
    <div class="container">
    <div class="row text-center">

    <h2> Items </h2><br>
    <div class="col" ng-repeat ="cartData in $ctrl.cartData" ng-view="track by item.name">
    <div class="card" style="width: 20rem;">
      <div class="card-block">
        <h5 class="card-title">{{cartData.product}}</h5>
        <p class="card-text"><small class="text-muted">Price: $\{{cartData.price}}</small></p>
        <br>
        <p>count: {{cartData.count}}</p>
        <br>
        <button data-product="{{cartData.product}}" data-price="{{cartData.price}}" class="add-to-cart btn btn-primary" ng-click="$ctrl.addToCart(cartData.product, cartData.price, cartData.count, cartData.image)">Add to cart</button>
    </div>
    

  </div>
  </div>

  <h2> Shopping Cart </h2><br>

  <div class="col" ng-repeat ="item in $ctrl.cart" ng-view="track by item.name">
  <div class="card" style="width: 20rem;">
    <div class="card-block">
      
      <h5 class="card-title">{{item.product}} #{{item.id}}</h5>
      <p class="card-text"><small class="text-muted">Price: $\{{item.price}}</small></p>
      <br>
      <p>count: {{item.count}}</p>
      <form>
        <input type="number" ng-model="count" />
        <button data-count="{{item.count}}" ng-click="$ctrl.updateCartItem(item, count)">Update</button>
      </form>
      <br>
      <button data-product="{{item.product}}" data-id="{{item.id}}" ng-click="$ctrl.deleteCartItem(item.id)">Remove</button>
  </div>
  

</div>
</div>
  </div>
  </div> 

`})