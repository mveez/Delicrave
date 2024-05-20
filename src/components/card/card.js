function card(desserts) {

    desserts.map((dessert) => {

        document.getElementById('catalogueItemsSection').innerHTML += '<div class="catalogueItem">'+
                                                                          '<div class="catalogueItemImage">'+
                                                                            `<img src="${dessert.image}" alt="Image ${dessert.nameDessert+' ('+dessert.type+')'}">`+
                                                                          '</div>'+
                                                                          '<div class="catalogueItemTexts">'+
                                                                            `<h2>${dessert.nameDessert}</h2>`+
                                                                            `<p>${dessert.price}</p>`+
                                                                          '</div>'+
                                                                      '</div>';
    })
}