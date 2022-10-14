//  Code By Sudhir Adhe 
function AddTask(){
    
    let task=document.getElementById('task').value;
    if(task==""){
  alert("Task Field is Empty! Please Fill In Task");
//   alert("Please Fill In Task ");
    }
    else{
        let table=document.getElementById('table');
            let row1=document.createElement('tr');
            const col1=document.createElement('td');
            const col2=document.createElement('td');
            const col3=document.createElement('td');
            document.getElementById('task').value="";
        col1.innerHTML=task;
        col2.innerHTML='<Button id="bt"> <img src="./check-mark.png" alt="" class="img"></Button>';
        let bt=document.getElementById('btn');
        col3.innerHTML='<Button> <img src="./delete_icon.jpg" alt="" class="img" onclick="RemovTask(this)"></Button>';
        row1.appendChild(col1);
        row1.appendChild(col2);
        row1.appendChild(col3);
        btn.classList.toggle('bg-green');
        table.appendChild(row1);

        col2.addEventListener('click',()=>{
            row1.classList.toggle('bg-green');
        })
    }

 }
 function RemovTask(button){
    var tab=document.getElementById('table');
    tab.deleteRow(button.parentNode.parentNode.rowindex);
 }