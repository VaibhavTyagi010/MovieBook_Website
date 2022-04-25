// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let price=JSON.parse(localStorage.getItem("amount"))||0
let w=document.querySelector("#wallet").innerText=price
let id
 async function main()
{
    try{
        const name=document.querySelector("#search").value
        let res= await fetch(`https://www.omdbapi.com/?s=${name}&apikey=dfb60be7`)
        let data =await res.json()
           return data.Search
    }
    catch(err)
    {
        console.log("err:",err)
    }
}
function debounce(delay)
{
    if(id)
    {
        clearTimeout(id)
    }
    id=setTimeout(function()
    {
        result()
    },delay)

}
async function result()
{
    let data = await main();
    if(data === undefined)
    return false
    append_data(data)
}
function append_data(data)
{ 
    document.querySelector("#movies").innerHTML=null 
    data.map(function(ele){
           
    let image=document.createElement("img")
    image.src=ele.Poster
    let name=document.createElement("p")
    name.innerText=ele.Title
    let btn=document.createElement("button")
    btn.innerText="Book Now"
    btn.addEventListener("click",function(){
        add(ele)
    })
    let box=document.createElement("div")
    box.append(image,name,btn)
    box.setAttribute("class","movie_tab")
    document.querySelector("#movies").append(box)

    })
}
let arr=[]
function add(ele)
{
arr.push(ele)
localStorage.setItem("movie",JSON.stringify(arr))
window.location.href="checkout.html"
}