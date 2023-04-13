var btnAdd = document.getElementById('add');
var listbox = document.getElementById('listbox');

function getValue ()
{
    var inpValue = document.getElementById('todolist').value;
    var newItem = document.createElement('li');
    newItem.innerText = inpValue;

    var btnDelete = document.createElement('button');
    btnDelete.innerText = "刪除項目"
    btnDelete.setAttribute("class", "btn btn-outline-secondary btn-sm deleteItem")
    document.getElementById("todolist").value="";

    var container = document.createElement('div');
    container.setAttribute("style","display:flex")
    container.appendChild(newItem);
    container.appendChild(btnDelete);
    listbox.append(container);


    document.getElementById("todolist").value=""
}

btnAdd.addEventListener('click', getValue)

document.addEventListener('click', function(e)
{
    if (e.target.classList.contains("deleteItem"))
    {
        e.target.parentElement.remove()
    }
});
