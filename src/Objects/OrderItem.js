 function createItem(name, desc,price,img,quantity){ 
    return {
         nome: name,
         desc: desc,
         price: price, 
         image: img
    }; 
} 


export function createItemJS(itemInfo){ 
    return {
         nome: itemInfo.name,
         price: itemInfo.price, 
         quantity: itemInfo.quantity
    }; 
} 

export default createItem

