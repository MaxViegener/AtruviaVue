Vuec.component('product', {
    template: `
        <div class="product">
            <div clas="product-image">
                <img v-bind:src="image">
            </div>
            <div clas="product-info">
                <h1>{{ title }}</h1>
                <h5>{{ description }}</h5>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants" :key="variant.variantId">
                    <p @mouseover="updateProduct(index)">{{ variant.variantSize }}</p>
                </div>
                <br>
                <p>Noch {{ quantity }} auf Lager</p>
                <button v-on:click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Zum Einkaufskorb hinzufügen</button>
                <div class='Einkaufswagen'>
                    <p>Einkauswagen({{ cart }})</p>
                </div>
            </div>
        </div>
    `,
    data()  {
        return {
            brand: 'LTT-STORE',
            product: 'Mauspad',
            description: 'Für ein reibungsloses Erlebnis',
            details: ["90% Micro-Fiber", "verbessert Maussensitivität", "schlichtes Design"],
            selectedVariant: 0,
            variants: [
                {
                    variantId: 001,
                    variantSize: '1000 x 600',
                    variantImage: 'mousepad-medium.png',
                    variantQuantity: 11
                },
                {
                    variantId: 002,
                    variantSize: '1500 x 600',
                    variantImage: 'mousepad-large.png',
                    variantQuantity: 0
                }
            ],
            cart: 0
        }
    },
    methodes: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProduct: function (index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        quantity() {
            return this.variants[this.selectedVariant].variantQuantity
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})
