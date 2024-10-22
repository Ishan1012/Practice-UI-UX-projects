
let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let taskbarOpen = false;

taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "225px")
    {
        startmenu.style.bottom = "-400px";
        taskbarOpen = false;
    }
    else
    {
        startmenu.style.bottom = "225px";
        taskbarOpen = true;
    }
})

// var today = new Date();

// if(today.getHours() < 15)
// {
//     document.body.style.backgroundImage = "url('2.png')";
// }
// else
// {
//     document.body.style.backgroundImage = "url('1.png')";
// }

