const productsArray = [
    {
        id: "1",
        title: "R1M",
        price: 1000
    },
    {
        id: "2",
        title: "HOME",
        price: 2000
    },
    {
        id: "3",
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