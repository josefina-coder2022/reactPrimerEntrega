export function getProductos(categoria, detalleId) {


    let url = 'https://fakestoreapi.com/products/';

    if (categoria == "") {
        url = url + detalleId
    } else {
        if (categoria == "women") {
            url = url + "category/women's clothing";
        } else if (categoria == "men") {
            url = url + "category/men's clothing";
        } else if (categoria == "jewelery") {
            url = url + "category/jewelery";
        }
    }

    return fetch(url)

        .then((respuesta) => {
            const datos = respuesta.json()
            return datos
        })

        .catch((error) => {
            console.log("Termino el pedido mal")
            console.log(error)
        })

}