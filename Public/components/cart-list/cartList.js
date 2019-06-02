function ItemList (CartService) {
  const ctrl = this;
  ctrl.cart= [];

  
    // ************************************************
// Shopping Cart API
// ************************************************


// LOADS CART
    ctrl.cartList = () => {
      CartService.getCart()

      .then( (data) => {
        console.log(data);

        data.forEach(function(item) {
          let cartObj = {
            id: item.id,
            product: item.product,
            price: item.price,
            count: item.count,
          }
          ctrl.cart.push(cartObj);
        })

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
    CartService.reloadData();
}
  
  // // Save cart
  // function addToCart() {
  //   sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  // }
  
    // Load cart
  // function loadCart() {
  //   cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  // }
  // if (sessionStorage.getItem("shoppingCart") != null) {
  //   loadCart();
  // }
  

  // =============================
  // Public methods and propeties
  // =============================
  // let ctrl = {};
  
  // Add to cart
  // ctrl.updateCartItem = (product, price, count) => {
  //   for(let item in cart) {
  //     if(cart[item].product === product) {
  //       cart[item].count ++;
  //       addToCart();
  //       return;
  //     }
  //   }
  //   let item = new Item(product, price, count);
  //   cart.push(item);
  //   addToCart();
  // }
  ctrl.updateCartItem = (product, price, count) => {
    let item  = {
        product: product,
        price: price,
        count: count,
    }
    console.log(item.id);

    CartService.updateItem(JSON.stringify(item))
    CartService.reloadData();
}

  // Set count from item
  // ctrl.setCountForItem = function(product, count) {
  //   for(let i in cart) {
  //     if (cart[i].product === product) {
  //       cart[i].count = count;
  //       break;
  //     }
  //   }
  // };




  // Remove item from cart
  // ctrl.removeItemFromCart = function(product) {
  //     for(let item in cart) {
  //       if(cart[item].product === product) {
  //         cart[item].count --;
  //         if(cart[item].count === 0) {
  //           cart.splice(item, 1);
  //         }
  //         break;
  //       }
  //   }
  //   addToCart();
  // }

  ctrl.deleteCartItem = (id) => {
    CartService.removeItem(id);
    CartService.reloadData();


}

  // // Remove all items from cart
  // ctrl.removeItemFromCartAll = function(product) {
  //   for(let item in cart) {
  //     if(cart[item].product === product) {
  //       cart.splice(item, 1);
  //       break;
  //     }
  //   }
  //   addToCart();
  // }

  // Clear cart
  // ctrl.clearCart = function() {
  //   cart = [];
  //   addToCart();
  // }


  // ///////\
    // ///////
      // ///////
        // ///////
          // ///////
            // ///////
              // ///////


  // UPDATING THE DISPLAY TEXT ONLY
  
  // List cart
  // ctrl.listCart = function() {
  //   let cartCopy = [];
  //   for(i in cart) {
  //     item = cart[i];
  //     itemCopy = {};
  //     for(p in item) {
  //       itemCopy[p] = item[p];

  //     }
  //     itemCopy.total = Number(item.price * item.count).toFixed(2);
  //     cartCopy.push(itemCopy)
  //   }
  //   return cartCopy;
  // }  
  
  // // Count cart 
  // ctrl.totalCount = function() {
  //   let totalCount = 0;
  //   for(let item in cart) {
  //     totalCount += cart[item].count;
  //   }
  //   return totalCount;
  // }

  // // Total cart
  // ctrl.totalCart = function() {
  //   let totalCart = 0;
  //   for(let item in cart) {
  //     totalCart += cart[item].price * cart[item].count;
  //   }
  //   return Number(totalCart.toFixed(2));
  // }



  // ///////
  // ///////
    // ///////
      // ///////
        // ///////
          // ///////

            // ///////

              // ///////


  // cart : Array
  // Item : Object/Class
  // updateCartItem : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // addToCart : Function
  // loadCart : Function
  // return ctrl;
  ctrl.cartList();
  CartService.getCart()






// // *****************************************
// // Triggers / Events
// // ***************************************** 
// // Add item
// $('.add-to-cart').click(function(event) {
//   event.preventDefault();
//   let product = $(this).data('product');
//   let price = Number($(this).data('price'));
//   shoppingCart.updateCartItem(product, price, 1);
//   displayCart();
// });

// // Clear items
// $('.clear-cart').click(function() {
//   shoppingCart.clearCart();
//   displayCart();
// });


// function displayCart() {
//   let cartArray = shoppingCart.listCart();
//   let output = "";
//   for(let i in cartArray) {
//     output += "<tr>"
//       + "<td>" + cartArray[i].product + "</td>" 
//       + "<td>(" + cartArray[i].price + ")</td>"
//       + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-product=" + cartArray[i].product + ">-</button>"
//       + "<input type='number' class='item-count form-control' data-product='" + cartArray[i].product + "' value='" + cartArray[i].count + "'>"
//       + "<button class='plus-item btn btn-primary input-group-addon' data-product=" + cartArray[i].product + ">+</button></div></td>"
//       + "<td><button class='delete-item btn btn-danger' data-product=" + cartArray[i].product + ">X</button></td>"
//       + " = " 
//       + "<td>" + cartArray[i].total + "</td>" 
//       +  "</tr>";
//   }
//   $('.show-cart').html(output);
//   $('.total-cart').html(shoppingCart.totalCart());
//   $('.total-count').html(shoppingCart.totalCount());


// // Delete item button

// $('.show-cart').on("click", ".delete-item", function(event) {
//   let product = $(this).data('product')
//   shoppingCart.removeItemFromCartAll(product);
//   displayCart();
// })


// // -1
// $('.show-cart').on("click", ".minus-item", function(event) {
//   let product = $(this).data('product')
//   shoppingCart.removeItemFromCart(product);
//   displayCart();
// })
// // +1
// $('.show-cart').on("click", ".plus-item", function(event) {
//   let product = $(this).data('product')
//   shoppingCart.updateCartItem(product);
//   displayCart();
// })

// // Item count input
// $('.show-cart').on("change", ".item-count", function(event) {
//    let product = $(this).data('product');
//    let count = Number($(this).val());
//   shoppingCart.setCountForItem(product, count);
//   displayCart();
// });

// displayCart();




// ctrl.cartList();

 
  // }}
}

angular.module("CartApp")
.component('cartList', {
    controller: ItemList,
    template: `




<!--
    <div class="container">
    <div class="row text-center">

    <div class="col" ng-repeat = "cartData in $ctrl.cartData">
    <div class="card" style="width: 20rem;">
  <div class="card-block">
    <h5 class="card-title">{{cartData.product}}</h5>
    <p class="card-text"><small class="text-muted">Price: $\{{cartData.price}}</small></p>
    <br>
    <p>Quantity: {{cartData.quantity}}</p>
    <button>Edit quantity</button>
    <br>
    <a href="#" data-product="{{cartData.product}}" data-price="{{cartData.price}}" class="add-to-cart btn btn-primary" ng-click="">Add to Cart</a>
  </div>
    

  </div>
  </div>
  </div>
  </div> -->


  <div class="container">
  <div class="row text-center">

  
  <div class="col">
  <div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/catfood.jpg" alt="Cat Food">
<div class="card-block">

<h4 id="product" class="card-title" ng-model="newProduct" ng-view="track by item.name">Cat Food</h4>
<p class="card-text" ng-model="newProduct" ng-view="track by item.name">Price: $5.00</p>
<button data-product="Cat-Food" data-price="5.00" class="add-to-cart btn btn-primary" ng-click="$ctrl.addToCart(newProduct.name, newProduct.price, newQuantity, newProduct.image)">Add to cart</button>
</div>
</div>
</div>


<div class="col">
  <div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/dogfood.jpg" alt="Dog Food">
<div class="card-block">
<h4 class="card-title">Dog Food</h4>
<p class="card-text">Price: $5.00</p>
<a href="#" data-product="Dog-Food" data-price="5.00" class="add-to-cart btn btn-primary">Add to cart</a>
</div>
</div>
</div>
<div class="col">
<div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/birdfood.jpg" alt="Bird Food">
<div class="card-block">
<h4 class="card-title">Bird Food</h4>
<p class="card-text">Price: $10.00</p>
<a href="#" data-product="Bird-Food" data-price="10.00" class="add-to-cart btn btn-primary">Add to cart</a>
</div>
</div>
</div>
<div class="col">
<div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/fishfood.jpg" alt="Card image cap">
<div class="card-block">
<h4 class="card-title">Fish Food</h4>
<p class="card-text">Price: $1.00</p>
<a href="#" data-product="Fish-Food" data-price="1.00" class="add-to-cart btn btn-primary">Add to cart</a>
</div>
</div>
</div>
<div class="col">
<div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/turtlefood.jpg" alt="Card image cap">
<div class="card-block">
<h4 class="card-title">Turtle Food</h4>
<p class="card-text">Price: $4.00</p>
<a href="#" data-product="Turtle-Food" data-price="4.00" class="add-to-cart btn btn-primary">Add to cart</a>
</div>
</div>
</div> 

<div class="col">
<div class="card" style="width: 20rem;">
<img class="card-img-top" src="imgs/rabbitfood.jpg" alt="Card image cap">
<div class="card-block">
<h4 class="card-title">Rabbit Food</h4>
<p class="card-text">Price: $2.00</p>
<a href="#" data-product="rabbit-Food" data-price="2.00" class="add-to-cart btn btn-primary">Add to cart</a>
</div>
</div>
</div>









<!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="exampleModalLabel">Cart</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
             <table class="show-cart table">                
             </table>
             <div class="modal-total">Total price: $<span class="total-cart"></span></div>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
             <!-- <button type="button" class="btn btn-primary">Order now</button> -->
             <button class="clear-cart btn btn-danger">Clear Cart</button>
           </div>
         </div>
       </div>
     </div>  








     


    

    
    `
})