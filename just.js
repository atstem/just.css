/* Owned By Actwu / IIan Laucsap CruzThis is a digital property copyrighted under iian's name*/ /*Console*/var greeting = ("Just Landed!!");console.log(greeting);
/*Menu*/ function menu() {/*One click opens menu, Second Click closes the menu*/menuu = document.getElementById("menu");menuu.classList.toggle("open");}
/* Toggle */
function to(theTarget, theDirect) {toCome = document.getElementById(theDirect.id);toCome.classList.remove("hide");cameFrom = document.getElementById(theTarget.id);cameFrom.classList.add("hide");}function into(rev) {document.getElementById(rev.id).classList.remove("hide");}function hide(hid) {document.getElementById(hid.id).classList.add("hide");}function tog(togs) {document.getElementById(togs.id).classList.toggle("hide");}
/* Display*/function print(toPrint) {console.log(toPrint)}function display(disTarget, disOut) {document.querySelector(disTarget).innerText = disOut;}function unsafe_display(disTarget, disOut) {document.querySelector(disTarget).innerHTML = disOut;}function printNdis(toDisPrint, pndTarget) {console.log(`${toDisPrint}:${pndTarget}`); document.querySelector(pndTarget).innerText = toDisPrint;} function makeEl(toEl, whatEl, idEl, classEl, textEl ) {passToEl = document.querySelector(toEl);const elToMake = document.createElement(whatEl);elToMake.innerText = textEl;elToMake.classList = classEl;elToMake.id = idEl;passToEl.append(elToMake);}function elClass(classTarget, classMet, classes) {classTo = document.querySelector(classTarget);if (classMet == "add") {classTo.classList.add(classes)}if (classMet == "remove" || classMet == "rem") {classTo.classList.remove(classes);}if (!classMet ||classMet == "toggle" || classMet == "tog") {classTo.classList.toggle(classes);}}
/* Animation */function scroll_animate(scrollTarget, scrollClass) {const scrollEl = document.querySelector(scrollTarget);window.addEventListener('scroll', () => {const {scrollTop, clientHeight} = document.documentElement;const scrollFix = scrollEl.getBoundingClientRect().top;if(scrollTop > (scrollTop + scrollFix).toFixed() - clientHeight * 0.5){scrollEl.classList.add(scrollClass);}})}
/* Data's*//*Get Data from variable*/function setLocal(dataSetname, setTarget) {localStorage.setItem(dataSetname, setTarget);}/*Deletes Data from variable*/function delLocal(dataDelname) {localStorage.clear(dataDelname);}/*Gets Local Data variable to result page*/function getLocal(dataGetname) {localStorage.getItem(dataGetname);}function uptLocal(dataSetname,setTarget,dataGetname) {localStorage.setItem(dataSetname, setTarget);localStorage.getItem(dataGetname);}async function post_db(serverUrl, dataName, data) {localStorage.setItem(dataName, data);const response = await fetch(serverUrl, {method: "POST",body: JSON.stringify(data),headers: {"Content-Type": "application/json",} }) } async function edit_db(serverUrl, dataName, data) {localStorage.setItem(dataName, data);const response = await fetch(serverUrl, {method: "PATCH",body: JSON.stringify(data),headers: {"Content-Type": "application/json",} }) } async function get_db(serverUrl, dataName) {localStorage.getItem(dataName);const response = await fetch(serverUrl, {method: "GET", headers: {"Content-Type": "application/json",} }) } 
