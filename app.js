

const addBtn = document.querySelector("#addbtn");
addBtn.addEventListener("click", additemToList);

function additemToList() {

    const selectMenu = document.getElementById("operators")
    const item = document.querySelector("#item").value;
    const value = document.querySelector("#value").value;
    const inkomstTotalSpan = document.querySelector(".income")
    const inkomstTotalInteger = inkomstTotalSpan.textContent
    const kostnadTotalSpan = document.querySelector(".expense")
    const kostnadTotalInteger = kostnadTotalSpan.textContent

    const vinst = document.querySelector(".total")

    const inkomstTotal = Number(inkomstTotalInteger)
    const kostnadTotal = Number(kostnadTotalInteger)
    const valueNumber = Number(value)


    const itemP = document.createElement("p")
    const itemInnehal = document.createTextNode(item + ": " + value)
    itemP.appendChild(itemInnehal)

    if (selectMenu.selectedIndex == 0) {
        const inkomstCount = inkomstTotal + valueNumber
        inkomstTotalSpan.innerHTML = inkomstCount


        const itemDiv = document.querySelector(".inkomst-lista")
        itemDiv.appendChild(itemP)

        CountVinst()



    } else if (selectMenu.selectedIndex == 1) {

        const kostnadCount = kostnadTotal + valueNumber
        kostnadTotalSpan.textContent = kostnadCount


        const itemDiv = document.querySelector(".kostnad-lista")
        itemDiv.appendChild(itemP)

        CountVinst()

    }


}

function CountVinst() {


    const inkomstTotalSpan = document.querySelector(".income")
    const inkomstTotalInteger = inkomstTotalSpan.textContent
    const kostnadTotalSpan = document.querySelector(".expense")
    const kostnadTotalInteger = kostnadTotalSpan.textContent

    const countTotal = document.querySelector(".total")

    const inkomstTotal = Number(inkomstTotalInteger)
    const kostnadTotal = Number(kostnadTotalInteger)



    const vinstCount = inkomstTotal - kostnadTotal
    countTotal.textContent = vinstCount
}