class EdibleElements {
        constructor(price, calories) {
        this.price = price;
        this.calories = calories;
    }
}

class BigBirger extends EdibleElements{
    constructor(price = 100, calories = 40) {
        super(price, calories);
    }
}

class SmallBurger extends EdibleElements{
    constructor(price = 50, calories = 20) {
        super(price, calories);
    }
}

class BurgerFillingChees extends EdibleElements {
    constructor(price = 10, calories = 20) {
        super(price, calories);
    }
}

class BurgerFillingSalat extends EdibleElements {
    constructor(price = 20, calories = 5) {
        super(price, calories);
    }
}

class BurgerFillingPotato extends EdibleElements {
    constructor(price = 15, calories = 10) {
        super(price, calories);
    }
}

class BurgerAdditionallySeasoning extends EdibleElements {
    constructor(price = 15, calories = 0) {
        super(price, calories);
    }
}

class BurgerAdditionallyMayonnaise extends EdibleElements {
    constructor(price = 20, calories = 5) {
        super(price, calories);
    }
}



const submitBtn = {
    btn: document.querySelector('input[type=submit]'),
    selectedPoints: [],
    selectedProducts: [],
    formElements: [
        document.querySelectorAll('input[name=burger]'),
        document.querySelectorAll('input[name=burgerFilling]'),
        document.querySelectorAll('input[name=burgerAdditionally]')
    ],
    total: document.querySelector('.total'),

    btnInit() {
        this.btn.addEventListener('click', (event) => {
            this.selectedPoints.splice();
            this.selectedProducts.splice();
            this.getCheckedElements();
            this.getProduct(this.selectedPoints);
            console.log(submitBtn.selectedProducts);
            this.total.innerText = "";
            this.total.insertAdjacentHTML("afterbegin", this.getSum());
        });
    },

    getSum() {
        let totalprice = 0;
        let totalcalories = 0;
        this.selectedProducts.forEach((product) => {
            totalprice += product.price;
            totalcalories += product.calories;
        });

        return `Итого: ${totalprice} рублей и ${totalcalories} каллоий`;
    },

    getCheckedElements() {
        this.formElements.forEach((formElement) => {
            if(formElement) {
                for(let element of formElement) {
                    if(element.checked) {
                        this.selectedPoints.push(element);
                    }
                }
            }
        });
    },

    getProduct(selectedPoints) {
        selectedPoints.forEach((element) => {
            switch(element.value) {
                case("smallburger"):
                    this.selectedProducts.push(new SmallBurger());
                    return;
                case("bigburger"):
                    this.selectedProducts.push(new BigBirger());
                    return;
                case("chees"):
                    this.selectedProducts.push(new BurgerFillingChees());
                    return;
                case("salat"):
                    this.selectedProducts.push(new BurgerFillingSalat());
                    return;
                case("potato"):
                    this.selectedProducts.push(new BurgerFillingPotato());
                    return;
                case("seasoning"):
                    this.selectedProducts.push(new BurgerAdditionallySeasoning());
                    return;
                case("mayonnaise"):
                    this.selectedProducts.push(new BurgerAdditionallyMayonnaise());
                    return; 
            }
        });
    },
}

submitBtn.btnInit();