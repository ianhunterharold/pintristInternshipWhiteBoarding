const pintristBlows = (products,shopping_list) => {

    let inefficientLength = shopping_list.length;
    
    let uniqueDepartments = new Set();
    
    for (let i = 0; i < shopping_list.length; i++){
        for (let j = 0; j <products.length; j++){
            if ( shopping_list[i] === products[j][0]){
              let add = uniqueDepartments.add(products[j][1]);
        }
      }
    }
    
    return inefficientLength - uniqueDepartments.size; 
    
    }
    
    
    const products =[ ['bread','bakery'],["milk","dairy"],["cheese","dairy"],["coffee","pantry"],["apples","produce"],["canned food","pantry"] ];
    
    const shopping_list = ['bread','cheese','coffee','canned food'];
    
    
    console.log(pintristBlows(products,shopping_list))