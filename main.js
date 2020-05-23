const todoControl = document.querySelector (".todo-control"),
todoList = document.querySelector (".todo-list"),
todoCompleted = document.querySelector (".todo-completed"),
todoContainer = document.querySelector (".todo-container"),
obj = JSON.parse(localStorage.getItem("obj"));
let obj = [
{
value: "Сварить кофе",
completed: false
},

{
value: "Помыть посуду",
completed: true
}
];

const render = () =>{
todoList.textContent="";
todoCompleted.textContent="";

obj.forEach((el) =>{
const li = document.createElement("li");
li.classList.add("todo-item");
li.innerHTML = `<span class="text-todo">${el.value}</span>
<div class="todo-buttons">
<button class="todo-remove"></button>
<button class="todo-complete"></button>
</div>`;
if (el.completed) todoCompleted.append(li);
else todoList.append(li);

})
}
render();

todoControl.addEventListener("submit", (event) =>{
event.preventDefault();
const input = todoControl.querySelector("input");
newObj = {value: input.value, completed: false}
obj.push(newObj);
render();
});

const search=(elem)=>{
const elemText=elem.querySelector("span").textContent;
elemCompleted=todoList.contains(elem);

obj.forEach((el,index)=>{
if(el.value===elemText){
if(el.completed===elemCompleted){
console.log(index);
return index;
}
}
})
}

todoContainer.addEventListener("click",(event)=>{
event.preventDefault();
const target=event.target;
if(!target.matches("button"))return;

if(target.matches(".todo-remove")){
let index=search(target.closest("li"));
obj.splice(index,1);
};
render();

})

if (el.value === '') {
    alert("Вы должны что-то написать!");
  } else {
   document.querySelector(".todo-list").appendChild(li);
  }
 document.querySelector(".header-input").value = "";


 //23.05
 
todoControl.addEventListener("submit", (event) =>{
  event.preventDefault();
  const input = todoControl.querySelector("input");
  if (input.value!=""){
      newObj = {value: input.value, completed: false}
      input.value="";
      obj.push(newObj);
      render();
  }else{
      alert("Пустое поле");
  };
} );


const search = (elem) =>{
  const elemText = elem.querySelector("span").textContent,
  elemCompleted = todoCompleted.contains(elem);
  obj.forEach((el, index) =>{
      if(el.value === elemText) {
          if (el.completed === elemCompleted) hi = index;
      }
  })
  return hi;
}

const setCookie=(key, value, year, month, day, path, sequre)=>{
  let strCookie=key+"="+value;
  if(year){
      const date=new Date (year, month, year)
      strCookie+=";"+"expires="+date.toGMTString();
  }
  strCookie+=path ? "; path"+path:"";
  strCookie+=path ? "; domain"+domain:"";
  strCookie+=sequre ? sequre : ""; 

  document.cookie=strCookie;                       
}