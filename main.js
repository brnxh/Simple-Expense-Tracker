const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

function addExpense(e)
{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const date = document.getElementById("dates").value;
    const amount = document.getElementById("amt").value;
    tbodyEl.innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${date}</td>
        <td>${amount}</td>
        <td><button class = "closeBtn">x</button></td>
    </tr>
    `;

}

function closeRow(e)
{
    if(!e.target.classList.contains("closeBtn")){
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

formEl.addEventListener("submit", addExpense);
tableEl.addEventListener("click", closeRow);