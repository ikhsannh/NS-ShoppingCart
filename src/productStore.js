// R1M : price_1MStfqAzkW9wt56KsSP7omQ8
// HOME : price_1MStgTAzkW9wt56KTlCI6BSz
// M1 PRO : price_1MStgrAzkW9wt56K6w8613ie


const productsArray = [
    {
        id: "price_1MStfqAzkW9wt56KsSP7omQ8",
        title: "R1M",
        price: 1000
    },
    {
        id: "price_1MStgTAzkW9wt56KTlCI6BSz",
        title: "HOME",
        price: 2000
    },
    {
        id: "price_1MStgrAzkW9wt56K6w8613ie",
        title: "M1 PRO",
        price: 500 
    },
]
    //function get data
    function getProductData(id) {
        let productData = productsArray.find(product => product.id === id);

        //in case product undefined
        if ( productData == undefined ){
            console.log("Product" + id + "data does not exist");
            return undefined;
        }

        return productData;
    }

export { productsArray, getProductData };