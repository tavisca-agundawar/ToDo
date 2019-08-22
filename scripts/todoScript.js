function display(showPart) {
    var parts = document.querySelectorAll("article");
    for (let part of parts) {
        if (part.id == showPart) {
            part.style.display = "block";
        }
        else {
            part.style.display = "none";
        }
    }
    var items = document.querySelectorAll("nav > ul > li > button");
    showPart = showPart.toLowerCase() + "Button";
    for (let item of items) {
        if (item.id == showPart) {
            item.style.backgroundColor = "#4CAF50";
            item.style.color = "white";
        }
        else {
            item.style.backgroundColor = "#f1f1f1";
            item.style.color = "black";
        }
    }

    var items = document.querySelectorAll("footer > div > div > button");
    for (let item of items) {
        if (item.id == showPart) {
            item.style.backgroundColor = "#4CAF50";
            item.style.color = "white";
        }
        else {
            item.style.backgroundColor = "#555";
            item.style.color = "white";
        }
    }
}

var addCount = (function () {
    let count = 0;
    return function () { return count++ };
})();

function edit(obj) {
    document.getElementById("editBox").style.display = "block";
    document.getElementById("confirm").onclick = function () { confirmEdit(obj) }

}

function cancel() {
    document.getElementById('todoEdit').value = "";
    document.getElementById("editBox").style.display = "none";
}

function confirmEdit(obj) {
    var input = document.getElementById('todoEdit');
    if (input.value == "") {
        return;
    }

    var items = document.getElementsByClassName("task");
    if (items != null) {
        for (const item of items) {
            if (item.id == obj.parentNode.id) {
                item.firstChild.data = input.value;
                break;
            }
        }
    }
    cancel();
}

function Delete(obj) {
    var items = document.getElementsByClassName("task");
    if (items != null) {
        for (const item of items) {
            if (item.id == obj.parentNode.id) {
                item.parentNode.removeChild(item);
                return;
            }
        }
    }
}

function addTask() {

    var input = document.getElementById('todo');
    if (input.value == "")
        return;

    //  CODE to prevent duplicate entries 

    var list = document.querySelector('ul#list');
    if (list != null) {
        for (const item of list.children) {
            if (item.firstChild.data == input.value) {
                alert("Task already exists in list!");
                return;
            }
        }
    }

    // Create edit button
    var editButton = document.createElement("button");
    editButton.id = "edit";
    editButton.onclick = function () { edit(this) };
    //editButton.innerHTML = "Edit";
    editButton.innerHTML = '<i class="fa fa-edit"></i>';

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.id = "delete";
    deleteButton.onclick = function () { Delete(this) };
    //deleteButton.innerHTML = "Delete";
    deleteButton.innerHTML = '<i class="fa fa-trash"></i>';

    var newItem = document.createElement("li");
    newItem.id = addCount();
    newItem.innerHTML = input.value;
    newItem.appendChild(editButton);
    newItem.appendChild(deleteButton);
    newItem.className = "task";
    document.getElementById("list").appendChild(newItem);
}

function search() {

    var items = document.getElementsByClassName("task");
    var input = document.getElementById('todo');
    var text = "";
    //console.log(items);
    
    if (input.value == "") {
        if (items != null) 
        {
            for (const item of items) 
            {
                //console.log(item);
                
                item.style.display = "block";
                item.parentNode.style.display = "block";
            }
        }
    }
    else {
        if (list != null) {
            for (const item of items) 
            {
                text = item.firstChild.data.toLowerCase();
                if (text.startsWith(input.value.toLowerCase()))
                {
                    item.style.display = "block";
                    item.parentNode.style.display = "block";
                }
                else
                {
                    item.style.display = "none";
                }
            }
        }
    }

}
