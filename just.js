/*   

Owned By Actwu / IIan Laucsap Cruz

This is a digital property copyrighted under iian's name

*/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             



/*Console*/
var greeting = ("Just Landed!!");
console.log(greeting);


/*Menu*/
function menu() {
/*One click opens menu, Second Click closes the menu*/
menuu = document.getElementById("menu")
menuu.classList.toggle("open");

}


/* Toggle */

function to(theTarget, theDirect) {

toCome = document.getElementById(theDirect.id);
toCome.classList.remove("hide");

cameFrom = document.getElementById(theTarget.id);
cameFrom.classList.add("hide");

}

function into(rev) {

document.getElementById(rev.id).classList.remove("hide");
}

function hide(hid) {

document.getElementById(hid.id).classList.add("hide");
}

function tog(togs) {
document.getElementById(togs.id).classList.toggle("hide");
}

/* 

Data's

*/

/*Get Data from variable*/
function setLocal(dataSetname, setTarget) {
localStorage.setItem(dataSetname, setTarget);
}

/*Deletes Data from variable*/
function delLocal(dataDelname) {
localStorage.clear(dataDelname);
}

/*Gets Local Data variable to result page*/
function getLocal(dataGetname) {
localStorage.getItem(dataGetname);
}


function uptLocal(dataSetname,setTarget,dataGetname) {
localStorage.setItem(dataSetname, setTarget);
localStorage.getItem(dataGetname);
}



async function send_db(serverUrl, dataName, data) {

localStorage.setItem(dataName, data);

try {
    const response = await fetch(serverUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }

}
async function get_db(serverUrl, dataName) {

    localStorage.getItem(dataName);
    
    try {
        const response = await fetch(serverUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    
}

/* 

Display

*/

function print(toPrint) {
    console.log(toPrint)
}
function dis(disTarget, disOut) {
    if(disConfig == null, disConfig == "") {
        document.querySelector(disTarget).innerText = disOut
    }
    if(disConfig == "unsafe", disConfig == "1") {
        document.querySelector(disTarget).innerHtml = disOut
    }
}
function printNdis(toDisPrint, pndTarget) {
    console.log(`${toDisPrint}:${pndTarget}`)
    if(disConfig == null, disConfig == "") {
        document.querySelector(pndTarget).innerText = toDisPrint
    }
    if(disConfig == "unsafe", disConfig == "1") {
        document.querySelector(pndTarget).innerHtml = toDisPrint
    }
}
function makeEl(toEl, whatEl, idEl, classEl, textEl ) {
    elementMakeIn = document.querySelector(toEl);
    const elementToMake = document.createElement(whatEl);
    elementToMake.id = idEl;
    elementClass = classEl
    elementToMake.innerText = textEl;
    elementToMake.classList = elementClass;
    elementMakeIn.append(elementToMake);
}

function elClass(classTarget, classMet, classes) {
    classTo = document.querySelector(classTarget);

    if (classMet == "add") {
        classTo.classList.add(classes)
    }
    if (classMet == "remove" || classMet == "rem") {
        classTo.classList.remove(classes)
    }
    if (classMet == "toggle" || classMet == "tog") {
        classTo.classList.toggle(classes)
    }
}


/* Animation */
function scroll_animate_fade() {
    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add("white")
            animate = entry.target.classList.add("fade-2s")
        }

        else {
            animate = entry.target.classList.remove("white")
            animate = entry.target.classList.remove("fade-2s")
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}

function scroll_animate_totop() {
    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add("white")
            animate = entry.target.classList.add("to-top2s")
        }

        else {
            animate = entry.target.classList.remove("white")
            animate = entry.target.classList.remove("to-top2s")
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}


function scroll_animate_toleft() {
    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add("white")
            animate = entry.target.classList.add("to-left2s")
        }

        else {
            animate = entry.target.classList.remove("white")
            animate = entry.target.classList.remove("to-left2s")
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}



function scroll_animate_toright() {
    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add("white")
            animate = entry.target.classList.add("to-right2s")
        }

        else {
            animate = entry.target.classList.remove("white")
            animate = entry.target.classList.remove("to-right2s")
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}


function scroll_animate_tobottom() {
    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add("white")
            animate = entry.target.classList.add("to-bottom2s")
        }

        else {
            animate = entry.target.classList.remove("white")
            animate = entry.target.classList.remove("to-bottom2s")
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}

custom_animate = "any"
custom_see = "any"

function scroll_animate_custom() {

    const scrollfix = document.querySelector('.nav').offsetHeight;

    // console.log(document.documentElement);
    
    document.documentElement.style.setProperty('--scroll-padding', scrollfix - 1 + "px");
    
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            animate = entry.target.classList.add(custom_see)
            animate = entry.target.classList.add(custom_animate)
        }

        else {
            animate = entry.target.classList.remove(custom_see)
            animate = entry.target.classList.remove(custom_animate)
        }
    })
});

const toAnimate = document.querySelectorAll('.scrollanimate')
toAnimate.forEach((el) => observer.observe(el))
}
