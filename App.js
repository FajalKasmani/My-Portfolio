let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname)
{
    for(let tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

let sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }
    
    function closemenu(){
        sidemenu.style.right = "-250px";
    }

// let msg = document.getElementById("msg");
