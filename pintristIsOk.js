const pintristIsJustOk = (products,shopping_list) => {

    // let inefficientLength = shopping_list.length;
    // let inefficientCount = -1; 
    let uniqueDepartments = new Set();
    const departmentsForList = [];
    
    
    
    for (let i = 0; i < shopping_list.length; i++){
        for (let j = 0; j <products.length; j++){
    
            if ( shopping_list[i] === products[j][0]){
              let add = uniqueDepartments.add(products[j][1]);
          let addAgain = departmentsForList.push(products[j][1])
        }
      }
    }
    
    
    let count = 0;
    
    for (let k= 0; k <departmentsForList.length; k++){    
      if (departmentsForList[k] !== departmentsForList[k - 1]){
        count++;
      }
    }
    
    
    return count - uniqueDepartments.size; 
    
    }
    
    
    const products =[ ['bread','bakery'],["milk","dairy"],["cheese","dairy"],["coffee","pantry"],["apples","produce"],["canned food","pantry"],['grapes','produce'],['flour','pantry'],['cheese','dairy'],['carrots','produce'],['romaine','produce'],["iceburg","produce"] ];
    
    const shopping_list = ['grapes','milk','coffee','flour','cheese','carrots'];
    
    
    console.log(pintristIsJustOk(products,shopping_list))