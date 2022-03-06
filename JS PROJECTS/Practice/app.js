console.log('STart')

function getItem() {
    let list = document.getElementById('list');
    let myvalue = document.getElementById('myvalue')
    let value = myvalue.value;
    let node = document.createElement("li")
    console.log(node)
    let textnode = document.createTextNode(value);
    console.log(textnode);
    node.appendChild(textnode);
    console.log(node);
    list.appendChild(node)



}


