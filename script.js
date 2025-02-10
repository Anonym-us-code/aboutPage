let getElement = (selector)=>{
    var element = document.querySelector(selector);
    if(element)return element;
    throw Error(`There is no ${selector} class.`)
}
var today = getElement("#date");
var dateToday = new Date().toLocaleDateString();
today.innerHTML = dateToday;
var handler = (event)=>{
   if(event){outRight.innerHTML=`You are on ${event.target.className}`;
    outRight.style.visibility = "visible"
   }
}
getElement(".medicine").addEventListener("mouseenter",handler)
getElement(".medicine").addEventListener("mouseleave",(event)=>{
    getElement(".medBtn").style.visibility = "visible"
     outRight.style.visibility = "hidden"
     output.innerHTML = ""
     output.style.visibility = "hidden"

})
getElement(".webDev").addEventListener("mouseleave",(event)=>{
    getElement(".webBtn").style.visibility = "visible"
     outRight.style.visibility = "hidden"
     output.innerHTML = ""
     output.style.visibility = "hidden"
})
getElement(".webDev").addEventListener("mouseenter",handler)
getElement(".cyber").addEventListener("mouseenter",handler)
getElement(".cyber").addEventListener("mouseleave",(event)=>{
    output.innerHTML = ""
    output.style.visibility = "hidden";
    getElement(".cyberBtn").style.visibility = "visible";
})

getElement(".softDev").addEventListener("mouseenter",handler)
getElement(".softDev").addEventListener("mouseleave",(event)=>{
    output.innerHTML =""
    output.style.visibility = "hidden";
    getElement("softBtn").style.visibility = "visible";
})

getElement(".cyberBtn").addEventListener("click",(event)=>{
    event.preventDefault()
    var strong = document.createElement("strong");
    var strText = document.createTextNode("Software Development")
    var paraMed = document.createElement("p");
    var paraText = document.createTextNode("Aliquid facere accusantium sapiente vitae repellendus vel odit minus, sit enim autem at temporibus sequi doloribus voluptate")

    strong.appendChild(strText);
    paraMed.appendChild(paraText);

    output.appendChild(strong);
    output.appendChild(paraMed);
    output.style.width = "180px"
    output.style.textAlign = "center"

    event.target.style.visibility = "hidden"
    output.style.visibility = "visible"
    output.classList.toggle("showUp");
})

getElement(".medBtn").addEventListener("click",(event)=>{
    event.preventDefault()
    //getElement(".medicine").removeEventListener("mouseenter",handler)
    var strong = document.createElement("strong");
    var strText = document.createTextNode("bsc Clinical medicine")
    var paraMed = document.createElement("p");
    var paraText = document.createTextNode("Aliquid facere accusantium sapiente vitae repellendus vel odit minus, sit enim autem at temporibus sequi doloribus voluptate")

    strong.appendChild(strText);
    paraMed.appendChild(paraText);

    output.appendChild(strong);
    output.appendChild(paraMed);
    output.style.width = "180px"
    output.style.textAlign = "center"

    event.target.style.visibility = "hidden"
    output.style.visibility = "visible"
    output.classList.toggle("showUp");
})

getElement(".webBtn").addEventListener("click",(event)=>{
    event.preventDefault()
    var strong = document.createElement("strong");
    var strText = document.createTextNode("Web Development")
    var paraMed = document.createElement("p");
    var paraText = document.createTextNode("Aliquid facere accusantium sapiente vitae repellendus vel odit minus, sit enim autem at temporibus sequi doloribus voluptate")

    strong.appendChild(strText);
    paraMed.appendChild(paraText);

    output.appendChild(strong);
    output.appendChild(paraMed);
    output.style.width = "180px"
    output.style.textAlign = "center"

    event.target.style.visibility = "hidden"
    output.style.visibility = "visible"
    output.classList.toggle("showUp");


})

getElement(".softBtn").addEventListener("click",(event)=>{
    event.preventDefault()
    var strong = document.createElement("strong");
    var strText = document.createTextNode("Software Development")
    var paraMed = document.createElement("p");
    var paraText = document.createTextNode("Aliquid facere accusantium sapiente vitae repellendus vel odit minus, sit enim autem at temporibus sequi doloribus voluptate")

    strong.appendChild(strText);
    paraMed.appendChild(paraText);

    output.appendChild(strong);
    output.appendChild(paraMed);
    output.style.width = "180px"
    output.style.textAlign = "center"

    event.target.style.visibility = "hidden"
    output.style.visibility = "visible";
    output.classList.toggle("showUp");
})