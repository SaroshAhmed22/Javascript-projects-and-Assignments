// console.log('STart')

// ! 👌  function to add Iytem
function getItem() {
    let list = document.getElementById('list');
    let myvalue = document.getElementById('myvalue')
    let value = myvalue.value;
    let node = document.createElement("li");
    // console.log(node)
    let textnode = document.createTextNode(value);
    // console.log(textnode);
    node.appendChild(textnode);
    // console.log(node);
    // console.log(value)
    list.appendChild(node);
    myvalue.value=""
    // ! adding add Btn start
    let editBtn = document.createElement("button");
    editBtn.setAttribute('id', 'edit');
    editBtn.setAttribute('class', 'editBtn',);
    // editBtn.className='a b c'
    editBtn.setAttribute('onclick', 'editItem(this)');
    let editTextNode = document.createTextNode('Edit Item');
    editBtn.appendChild(editTextNode);
    node.appendChild(editBtn);
    console.log(editBtn)

    // ! adding add Btn end

    // ! adding delete Btn start
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('id', 'edit');
    deleteBtn.setAttribute('class', 'deleteBtn');
    deleteBtn.setAttribute('onclick', 'deleteItem(this)');
    let deleteTextNode = document.createTextNode('delete Item');
    deleteBtn.appendChild(deleteTextNode);
    node.appendChild(deleteBtn);

    // ! adding delete Btn end



}

// ! edit item start
function editItem(e) {
    let newText = prompt("Please Enter New Text");
    e.parentNode.firstChild.nodeValue = newText;
    // console.log(e.parentNode.firstChild)
    // console.log(e.parentNode.firstChild.nodeValue)
    // e.parentNode.firstChild.nodeValue="Sarosh"
    // console.log(e.parentNode())
}
// ! edit item end

// ! delete item start

function deleteItem(e) {
    e.parentNode.remove();

}

// ! delete item end



