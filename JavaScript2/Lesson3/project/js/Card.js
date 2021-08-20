class CartList extends ProductsList {
    constructor(container = ".cart") {
        super(container);
            this.cartGoods = [];
            this.allProductsInCart = [];
            this.total = {
                cartTotalAmount : null,
                cartTotalCount : null,
            }
            this._buttonsInit();
        
    
        this._getProducts()
            .then(data => {
                this.cartGoods = [...data.contents];
                this.total.cartTotalAmount = data.amount;
                this.total.cartTotalCount = data.countGoods;
                this.renderItemsInBasket();
                this.renderAmountAndCountInCart();
            });
    }

    renderAmountAndCountInCart() {
        const cart = document.querySelector(this.container);
        cart.insertAdjacentHTML('beforeend', `<div class="total"><div><p>Колчичество:<span class="cart__total-count">${this.total.cartTotalCount}</span></p><p>Общая стоимость всех товаров:$<span class="cart__total-sum">${this.total.cartTotalAmount}</span></p></div></div>`);
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`)
                .then(result => result.json())
                .catch(error => {
                    alert(`Error!`);
                });
    }

    _buttonsInit() {
        const cart = document.querySelector(this.container);
        const cartBtn = document.querySelector('.btn-cart');

        cartBtn.addEventListener('click', (event) => {
            cart.classList.toggle('cart-display');
        });

        cart.addEventListener('click', (event) => {
            if(event.target.closest('.cart-item__rmbtn')) {
                this.removeFromTotal(event.target);
                this.removeFromCart(event.target);
            }
        });
    }

    removeFromTotal(clickItem) {
        if(clickItem.parentElement.className === 'cart-item__rmbtn') {
            let cartItem = clickItem.parentElement.parentNode;
            this.total.cartTotalAmount -= +cartItem.dataset.totalproductprice;
            this.total.cartTotalCount -= +cartItem.querySelector('.cart-item__check').value;
            this.renderNewValues(this.total);
        }

        if(clickItem.parentElement.className === 'cart-item') {
            let cartItem = clickItem.parentElement;
            this.total.cartTotalAmount -= +cartItem.dataset.totalproductprice;
            this.total.cartTotalCount -= +cartItem.querySelector('.cart-item__check').value;
            this.renderNewValues(this.total);
        }
    }

    renderNewValues(total) {
        const totalAmount = document.querySelector('.cart__total-sum');
        const totalCount = document.querySelector('.cart__total-count');
        totalAmount.innerText = total.cartTotalAmount;
        totalCount.innerText = total.cartTotalCount;
    }

    addToCart() {

    }

    removeFromCart(clickItem) {
        if(clickItem.parentElement.className === 'cart-item__rmbtn') {
            let cartItem = clickItem.parentElement.parentNode;
            cartItem.parentNode.removeChild(cartItem);
            if(this.cartGoods.includes(cartItem)) {
                console.log('Yes!');
            }
        }

        if(clickItem.parentElement.className === 'cart-item') {
            let cartItem = clickItem.parentElement;
            cartItem.parentNode.removeChild(cartItem);
        }
    }

    reduceProductCountInCart() {

    }

    calcCart() {

    }

    renderItemsInBasket() {
        const cart = document.querySelector(this.container);
        for(let item of this.cartGoods) {
            let cartItem = new CartItem(item);
            cart.insertAdjacentHTML('beforeend', cartItem.render());
        }

    }
}

class CartItem extends ProductItem{
    constructor(item, img = 'https://placehold.it/200x150') {
        super(item, img)
        this.itemCount = 1;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id}" data-totalProductPrice="${this.price}">
                <div class="cart-item__wrapper">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <div class="cart-item__add-reduce-check">
                            <button class="cart-item__add">+</button>
                            <input class="cart-item__check" value="${this.itemCount}">
                            <button class="cart-item__reduce">-</button>
                        </div>
                    </div>
                </div>
                <button class="cart-item__rmbtn"><i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>`
    }
}

new CartList();

