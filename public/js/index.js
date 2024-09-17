
document.addEventListener("DOMContentLoaded", () => {
    const itemList = document.querySelector(".items-list");

    document.querySelector("#input").addEventListener("keyup", (event) => {

        const newQuantity = event.target.value;
        quantity = parseInt(newQuantity)
        itemList.innerHTML = "";

        for (let i = 1; i <= quantity; i++) {
            itemList.innerHTML += 
            `<li class="each-box">
                <span class="number">${i}</span>
            </li>`
        };
    })
})



