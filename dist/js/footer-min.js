"use strict";var accordions1=document.querySelectorAll(".footer__accordion_Button"),contents1=document.querySelectorAll(".footer__accordion_content"),arrows=document.querySelectorAll(".footer__accordion_arrow");active1=function(t,o){contents1.forEach(function(t,c){c!==o?(t.style.height=0,removeClass1(accordions1[c],contents1[c],"active1")):addClass1(accordions1[c],contents1[c],"active1")}),t.style.height="".concat(t.scrollHeight,"px"),arrows.forEach(function(t,c){t.style.transform="rotate(45deg)",c!==o&&(t.style.transform="rotate(-135deg)")})},accordions1.forEach(function(t,o){return t.addEventListener("click",function(){return active1(contents1[o],o)})});var addClass1=function(t,o,c){t.classList.add(c),o.classList.add(c)},removeClass1=function(t,o,c){t.classList.remove(c),o.classList.remove(c)};