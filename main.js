let submit = document.getElementById('submit');
submit.addEventListener('click', showExpense);

let row = 1;

function showExpense(){
    let name = document.getElementById('fname');
    let date = document.getElementById('dates');
    let amount = document.getElementById('amt');

    let view = document.getElementById('view')

    let newRow = view.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    let btn = document.createElement('button');
    btn.innerText = 'x';
    // btn.type = "button";
    // btn.className = "btn";


    // let cell4 = newRow.insertCell(3);

    cell1.innerHTML = fname.value;
    cell2.innerHTML = dates.value;
    cell3.innerHTML = amt.value;
    cell4.appendChild(btn);
    // cell4.innerHTML = btn.value;

    row++;
    
}