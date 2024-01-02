const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        //adding input to list 
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        //adding x icon next to list
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span); 
    }
    //emptying the input box after add
    inputBox.value= "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

//Save and Show data 
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();