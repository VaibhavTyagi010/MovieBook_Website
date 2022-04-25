// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let price=JSON.parse(localStorage.getItem("amount"))||0
let w=document.querySelector("#wallet").innerText=price
let data=JSON.parse(localStorage.getItem("movie"))
console.log(data)
let name1=document.createElement("p")
name1.innerText=data[0].Title
let image=document.createElement("img")
image.src=data[0].Poster
document.querySelector("#movie").append(name1,image)

function confirm()
{
    let seat=document.querySelector("#number_of_seats").value 
   
    if(seat*100<=price)
    { price=price-seat*100
        alert("Booking successfull! ")
       
      
       localStorage.setItem("amount",price)
        price=JSON.parse(localStorage.getItem("amount"))||0
        w=document.querySelector("#wallet").innerText=price
    }
    else
    alert("Insufficient Balance!")
    
}