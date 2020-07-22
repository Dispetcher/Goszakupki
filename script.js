// ==UserScript==
// @name      Script for Goszakupki
// ==/UserScript==
let link = document.location.href;
if(link.indexOf("reestrNumber") != -1 || link.indexOf("regNumber") != -1){
  
  let contentCard = document.querySelectorAll(".container");
  var contentCardText = contentCard.length + "href=" + link + " ";
  
  if (link.indexOf("reestrNumber") != -1) {
    var n = 3;
  }else{
    var n = 8;
  }
  
  for(let i=3; i<contentCard.length-n; i++){
    contentCardText += contentCard[i].innerText;
  }
  
  let bg = document.createElement("div");
  bg.className = "bg";
	bg.style.cssText = "background-color: #737373; position: fixed; z-index:100000; top: 0; left:0; right:0; bottom: 0; height: 1080px";
	document.querySelector(".footer-links").appendChild(bg);
    
  let block = document.createElement("div");

  block.style.cssText = "background-color: #fff; position: fixed; z-index:100001; top:100px; left: 200px; height: 80%; width: 1000px; padding: 10px; font-size: 12px; overflow: scroll";
  block.className = "selectRange";
  block.innerHTML = contentCardText.toString();

  document.querySelector(".footer-links").appendChild(block);

  var select = document.querySelector(".selectRange");
  let range = document.createRange();

  range.selectNode(select);
  window.getSelection().addRange(range);
  
  bg.onclick = () => {
    bg.style.display = "none";
  	select.style.display = "none";
  }

}