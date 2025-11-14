let list = document.querySelector("#to-do-list");
let addInput = document.querySelector("#add-form input");
let addBtn = document.querySelector("#add-form button");
let searchInput = document.querySelector("#search-form input");

list.addEventListener("click", (e)=>{
    if(e.target.nodeName == "BUTTON" && e.target.className == "delete-btn"){
        e.target.parentNode.remove()
        if(list.children.length == 0){
            let listEmptyMsg = document.createElement("div")
            listEmptyMsg.style.textAlign = "center"
            listEmptyMsg.style.color = "#333"
            listEmptyMsg.innerText = "your list is empty"
            listEmptyMsg.style.fontSize = "20px";
            listEmptyMsg.id = "EmptyMsg"
            list.appendChild(listEmptyMsg)
            
        }
    }
})

addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(!addInput.value){
        return
    }
    if(document.querySelector("#EmptyMsg"))
        document.querySelector("#EmptyMsg").remove()

    list.append(creatListItem(addInput.value))

    addInput.value = "";
})

function creatListItem(itemValue){
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("button")

    item.className = "to-do-item"

    title.className = "title"
    title.innerText = itemValue;

    btn.className = "delete-btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)
    return item
}

searchInput.addEventListener("input", (e)=>{
    Array.from(list.children).forEach(element=>{
        if(document.querySelector("#EmptyMsg")){
            return;
        }

        if(element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())){
            element.style.display = "flex"
        }else{
            element.style.display = "none"
        }
    })
})

