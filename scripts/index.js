// Store the wallet amount to your local storage with key "amount"
let price=JSON.parse(localStorage.getItem("amount"))||0
let w=document.querySelector("#wallet").innerText=price
function addToWallet()
{
    let value=document.querySelector("#amount").value
    price=JSON.parse(localStorage.getItem("amount"))||0
   price+=+value
    localStorage.setItem("amount",price)
    price=JSON.parse(localStorage.getItem("amount"))
    let w=document.querySelector("#wallet").innerText=price

}

