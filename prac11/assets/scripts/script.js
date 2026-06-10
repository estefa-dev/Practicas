
  let btnCreate = document.getElementById("btnCreateTable")

  btnCreate.addEventListener('click', addTable)

  function addTable(){
    let inputNumber=document.getElementById("number")

    let num = inputNumber.value 
    showTable(num)
    
}
function showTable(num){
  let tableNumber=document.getElementById("addsTable")

  for (let i=1; i<=10;i++){
      let row = document.createElement("tr")
      
      row.innerHTML=`
      <td>${num}*${i}</td>
      <td>${num*i}</td>`;
      tableNumber.appendChild(row);
  }
}