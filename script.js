const product = {
    plainBurger: {
        name: "Гамбургер простой",
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: "Гамбургер Fresh",
        price: 20500,
        kcall: 500,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        kcall: 700,
        amount: 0,
        get Summ() {
            return this.amount * this.price
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    }

}

const extraProduct = {
    doubleMayonnaise: {
        name: "Двойной майонез",
        price: 500,
        kcall: 50
    },
    lettuce: {
        name: "Салатный лист",
        price: 300,
        kcall: 10
    },
    cheese: {
        name: "Сыр",
        price: 400,
        kcall: 30
    },
}

const btnPlusOrMinus = document.querySelectorAll(".main__product-btn"),
    checkExtraProduct = document.querySelectorAll(".main__product-checkbox"),
    addCart = document.querySelector(".addCart"),
    receipt = document.querySelector('.receipt'),
    receiptOut = document.querySelector(".receipt__window-out"),
    receiptWindow = document.querySelector("receipt__window"),
    btnReceipt = document.querySelector(".receipt__window-btn")
for (let i = 0; i < btnPlusOrMinus.length; i++) {

    btnPlusOrMinus[i].addEventListener("click", function() {
        plusOrMinus(this)
    })
}


function plusOrMinus(element) {
    const parent = element.closest(".main__product"),
        parentId = parent.getAttribute("id"),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector(".main__product-price span"),
        kcall = parent.querySelector(".main__product-kcall span"),
        elementData = element.getAttribute("data-symbol")

    if (elementData == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (elementData == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    out.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kcall.innerHTML = product[parentId].Kcall

}