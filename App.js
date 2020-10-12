function addTask() {
    let newTask = document.createElement('li');

    let inputTask = document.getElementById('item-input').value;
    let text = document.createTextNode(inputTask);

    var btn = document.createElement("BUTTON");
    var btnDel = document.createElement("BUTTON");

    btn.innerHTML="Check";
    btnDel.innerHTML="Delete";

    newTask.appendChild(text);
    newTask.appendChild(btn);
    newTask.appendChild(btnDel);


    if(inputTask===''){
        alert("You can not add empty task")
    }
    else{
        document.getElementById('todo').appendChild(newTask);
    }
    document.getElementById('item-input').value='';

    btn.addEventListener('click',function () {

        newTask.style.backgroundColor="limegreen";
        newTask.style.textDecoration="line-through";
    })

    btnDel.addEventListener('click',function () {

        document.getElementById('todo').removeChild(newTask);
    })

}
