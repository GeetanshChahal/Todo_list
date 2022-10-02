window.addEventListener("load",()=>{

const form=document.querySelector("#todo_form");
const input=document.querySelector("#todo_input");
const list_el=document.querySelector("#todo_tasks");


form.addEventListener("submit",(e)=>{  
    e.preventDefault();
    const task=input.value;     
    if(!task){  //if value is empty 
        alert("Please add a task");
        return;
    }

// task div
const task_el=document.createElement("div");
task_el.classList.add("task");

const task_content_el = document.createElement("div");
task_content_el.classList.add("content");


task_el.appendChild(task_content_el);

 const task_input_el=document.createElement("input");
 task_input_el.classList.add("todo_text");
 task_input_el.type="todo_text";
 task_input_el.value=task;
 task_input_el.setAttribute("readonly","readonly");

task_content_el.appendChild(task_input_el);

// creating buttons
const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

        const task_complete_el=document.createElement('button');
        task_complete_el.classList.add('complete');
        task_complete_el.innerText='Complete';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_complete_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

// edit functionality
task_edit_el.addEventListener("click",()=>{
    if(task_edit_el.innerText.toLowerCase()=="edit"){
        task_input_el.removeAttribute("readonly"); 
        task_input_el.focus();
        task_edit_el.innerText="Save";

    }
    else{
        task_input_el.setAttribute("readonly","readonly");
        task_edit_el.innerText="Edit";
    }
});
//complete functionality
task_complete_el.addEventListener("click",()=>{
    task_input_el.style.color="#009900";
    task_input_el.style.textDecoration="line-through";
    task_actions_el.removeChild(task_edit_el);
    task_complete_el.innerText="Completed";

});
//delete functionality
task_delete_el.addEventListener("click",()=>{
    list_el.removeChild(task_el);
});

});
});