const dateInput = document.querySelector(".date")
const noteInput = document.querySelector(".note")
const expenseInput = document.querySelector(".expense")
const saveButton = document.querySelector(".save")
const clearButton = document.querySelector(".clear")
const ul = document.querySelector("ul")
let arrayedItem = []
// saveButton 
saveButton.addEventListener("click", () => {
    const getLocalItem = JSON.parse(localStorage.getItem("localitem"))
    // chick if the local has a value else the local value of the getLocalItem will be the arrayedItem 
    if(getLocalItem === null) {
        arrayedItem = []
    }else {
        arrayedItem = getLocalItem
    }
    arrayedItem.push([
        dateInput.value,
        expenseInput.value,
        noteInput.value
    ])
    // remove the input value to the input text in the dom
    dateInput.value = ''
    expenseInput.value = ''
    noteInput.value = ''
    localStorage.setItem("localitem",JSON.stringify(arrayedItem))
    loopingTheData()
})
// using this arrow function to iterate all the value in the local storage
const loopingTheData = () => {
    let addElement = ''
    const getLocalItem = JSON.parse(localStorage.getItem("localitem"))
    if(getLocalItem === null) {
        arrayedItem = []
    }else {
        arrayedItem = getLocalItem
    }
    // using the forEach method, iterate all the value inside the local storage
    arrayedItem.forEach((x) => {
        console.log(x)
        addElement += `
        <li>
            <div class="inputs">
                <div class="inputItem">
                    <span class="outputDate">Date: ${x[0]}</span>
                    <span class="outputExpense">Expense: ${x[1]}</span>
                </div>
                <div class="inputItem">
                    <span class="outputNotes">Notes: ${x[2]}</span>
                </div>
            </div>
        </li>
        
        `
    });
    ul.innerHTML = addElement
}
// dont forget to call the loopingTheDate() iterate all the localvalue even the page was refreshr
loopingTheData()

clearButton.addEventListener("click", () => {
    localStorage.clear()
    loopingTheData()
})

