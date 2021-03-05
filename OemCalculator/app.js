//Storage Controller

const StorageController = (function () {



})();



//Product Controller

const ProductController = (function () {

    //Private

    const Product = function (id, name, price) {

        this.id = id
        this.name = name
        this.price = price

    }

    const data = {
        products: [],
        selectedProduct: null,
        totalPrice: 0
    }

    //Public
    return {

        getProducts: function () {
            return data.products;
        },
        getData: function () {
            return data;
        },

        GetProductById: function (id) {

            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == id) {
                    product = prd;
                }
            })

            return product;
        },

        setCurrentProduct: function (product) {
            data.selectedProduct = product;
        },

        getCurrentProduct: function () {
            return data.selectedProduct;
        },

        AddProduct: function (name, price) {

            let id;

            if (data.products.length > 0) {
                id = data.products[data.products.length - 1].id + 1
            } else {
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;

        },

        updateProduct : function (name, price) {
            let product = null;

            data.products.forEach(function (prd) {
                if (prd.id == data.selectedProduct.id) {
                    prd.name = name;
                    prd.price = parseFloat(price);
                    product = prd;
                }
            })

            return product;
        },

        GetTotal: function () {
            let total = 0;
            data.products.forEach(function (item) {
                total += item.price;
            });

            data.totalPrice = total;
            return data.totalPrice;
        },

    }

})();



//UI Controller 

const UIController = (function () {

    const selectors = {
        productList: '#item-list',
        productListItems : '#item-list tr',
        addButton: '.addBtn',
        updateButton: '.updateBtn',
        cancelButton: '.cancelBtn',
        deleteButton: '.deleteBtn',
        productName: '#productName',
        productPrice: '#productPrice',
        productCard: '#productCard',
        totalTL: '#total-tl',
        totalDolar: '#total-dolar'

    }

    return {
        createProductList: function (products) {
            let html = ``;

            products.forEach(prd => {
                html += `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price}</td>
                    <td class="text-right">
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i> 
                    </td>
                </tr>
            `
            });


            document.querySelector(selectors.productList).innerHTML = html
        },
        getSelectors: function () {
            return selectors;
        },
        addProduct: function (prd) {
            document.querySelector(selectors.productCard).style.display = 'block';
            var item = `
                <tr>
                    <td>${prd.id}</td>
                    <td>${prd.name}</td>
                    <td>${prd.price} $</td>
                    <td class="text-right">
                        <i class="far fa-edit edit-product"></i> 
                    </td>
                </tr>
                
            `;

            document.querySelector(selectors.productList).innerHTML += item;
        },
        updateProduct : function(prd){

            let updatedItem = null;

            let items = document.querySelectorAll(selectors.productListItems);
            items.forEach(function(item){
                
                if(item.classList.contains('bg-warning')){
                    item.children[1].textContent = prd.name;
                    item.children[2].textContent = prd.price + ' $';
                    updatedItem = item
                }

            })


            return updatedItem;

        },

        clearInputs: function () {
            document.querySelector(selectors.productName).value = '';
            document.querySelector(selectors.productPrice).value = '';
        },
        hideCard: function () {
            document.querySelector(selectors.productCard).style.display = 'none';
        },
        showTotal: function (total) {
            document.querySelector(selectors.totalDolar).textContent = total;
            document.querySelector(selectors.totalTL).textContent = total * 4.5;
        },
        addProductToForm: function () {
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(selectors.productName).value = selectedProduct.name;
            document.querySelector(selectors.productPrice).value = selectedProduct.price;

        },
        addingState: function (item) {

            if(item){
                item.classList.remove('bg-warning');
            }
            UIController.clearInputs();
            document.querySelector(selectors.addButton).style.display = 'inline';
            document.querySelector(selectors.updateButton).style.display = 'none';
            document.querySelector(selectors.deleteButton).style.display = 'none';
            document.querySelector(selectors.cancelButton).style.display = 'none';
        },
        editState: function (tr) {

            const parent = tr.parentNode;
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].classList.remove('bg-warning');
            }

            tr.classList.add('bg-warning');

            document.querySelector(selectors.addButton).style.display = 'none';
            document.querySelector(selectors.updateButton).style.display = 'inline';
            document.querySelector(selectors.deleteButton).style.display = 'inline';
            document.querySelector(selectors.cancelButton).style.display = 'inline';
        }
    }

})();



//App Controller
const App = (function (ProductCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelectors();

    //Load Event Listeners
    const loadEventListeners = function () {

        //Add product event
        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);

        //Edit Product
        document.querySelector(UISelectors.productList).addEventListener('click', productEditSubmit)

        //Edit product submit (save changes)
        document.querySelector(UISelectors.updateButton).addEventListener('click', editProductSubmit)

    }

    const editProductSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {

            //Update product
            const updatedProduct = ProductController.updateProduct(productName, productPrice);

            //update UI
            let item = UICtrl.updateProduct(updatedProduct);

            //Get Total
            const total = ProductCtrl.GetTotal();


            //Show total on UI 
            UICtrl.showTotal(total);

            UICtrl.addingState(item);


        }

        e.preventDefault();

    }

    const productAddSubmit = function (e) {

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if (productName !== '' && productPrice !== '') {
            const newProduct = ProductCtrl.AddProduct(productName, productPrice);

            //add item to list
            UICtrl.addProduct(newProduct);

            //Get Total
            const total = ProductCtrl.GetTotal();


            //Show total on UI 
            UICtrl.showTotal(total);

            //Clear inputs
            UICtrl.clearInputs();
        }

        e.preventDefault();
    }

    const productEditSubmit = function (e) {

        if (e.target.classList.contains('edit-product')) {



            const id = e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

            //Get Selected product

            const product = ProductCtrl.GetProductById(id);


            // set current product

            ProductCtrl.setCurrentProduct(product);


            //add product to UI
            UICtrl.addProductToForm();



            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault();
    }

    return {
        init: function () {
            console.log('starting app');

            UICtrl.addingState();
            const products = ProductCtrl.getProducts();
            if (products.length == 0) {
                UICtrl.hideCard();
            } else {
                UICtrl.createProductList(products);
            }



            //Load Event Listener
            loadEventListeners();

        }
    }



})(ProductController, UIController);

App.init();


