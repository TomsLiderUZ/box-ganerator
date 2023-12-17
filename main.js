


// setInterval(()=>{
//   let input = document.querySelectorAll('input')
//   input.forEach(val=>{
//       val.addEventListener("change" , ()=>{
//           document.querySelector(".box").style.background = val.
//           value

//       })
//   })
  
// })

let box = document.querySelector(".box")
let nbspMore = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
let CSSnbsp = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

let CSSstyleName = `<span style="color: #01ff80;">`
let endSpan = `</span>`
let CSSstyleValue = `<span style="color: orange;">`


// let CSStextBorder = `<b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b>`






setInterval(() => {
  box.style.background = document.querySelector(".bg_color").value
  box.style.border = `${document.querySelector(".borderSize").value/2+"px"} solid ${document.querySelector(".border_color").value}`
  box.style.borderRadius = document.querySelector(".borderRadius").value+"px"
  box.style.width = document.querySelector(".width").value+"%"
  box.style.height = document.querySelector(".height").value+"%"

  box.style.display = document.querySelector(".display").value
  box.style.justifyContent = document.querySelector(".justifyContent").value
  box.style.alignItems = document.querySelector(".alignItems").value
  box.style.flexWrap = document.querySelector(".flexWrap").value


  box.style.textWrap = document.querySelector(".textWrap").value
  box.style.textAlign = document.querySelector(".textAlign").value
  box.textContent = document.querySelector(".set_text").value
  box.style.fontSize = document.querySelector(".fontSize").value*10+"%"
  box.style.color = document.querySelector(".text_color").value
  box.style.textShadow = `1.41px 1.41px ${document.querySelector(".text_color_border").value}, 2px 0 ${document.querySelector(".text_color_border").value}, 1.41px -1.41px ${document.querySelector(".text_color_border").value}, 0 -2px ${document.querySelector(".text_color_border").value}, -1.41px -1.41px ${document.querySelector(".text_color_border").value}, -2px 0 ${document.querySelector(".text_color_border").value}, -1.41px 1.41px ${document.querySelector(".text_color_border").value}, 0 2px ${document.querySelector(".text_color_border").value}`
  


  
  // ---------Input values-------
  document.querySelector(".bg_color").setAttribute("title", document.querySelector(".bg_color").value)
  document.querySelector(".border_color").setAttribute("title", document.querySelector(".border_color").value)
  document.querySelector(".borderSize").setAttribute("title", document.querySelector(".borderSize").value)
  document.querySelector(".borderRadius").setAttribute("title", document.querySelector(".borderRadius").value)
  document.querySelector(".width").setAttribute("title", document.querySelector(".width").value)
  document.querySelector(".height").setAttribute("title", document.querySelector(".height").value)
  document.querySelector(".set_text").setAttribute("title", document.querySelector(".set_text").value)
  document.querySelector(".fontSize").setAttribute("title", document.querySelector(".fontSize").value)
  document.querySelector(".text_color").setAttribute("title", document.querySelector(".text_color").value)
  document.querySelector(".text_color_border").setAttribute("title", document.querySelector(".text_color_border").value)


});







document.querySelector(".resert_btn").addEventListener("click", ()=>{
  alert("Bu funksiya hozir ishlamayabdi !")
})













document.querySelector(".ganereteCode_modal_backBTN").addEventListener("click", ()=>{
  document.querySelector(".ganereteCode_modal").style.display = "none"
})
document.querySelector(".ganereteCode_modal_bottomColoseBTN").addEventListener("click", ()=>{
  document.querySelector(".ganereteCode_modal").style.display = "none"
})






document.querySelector(".give_code_btn").addEventListener("click", ()=>{
  document.querySelector(".ganereteCode_modal").style.display = "flex"



  document.querySelector("#ganereteCode_modal_CSS").innerHTML= `
<b style="color: purple;">.box</b><b style="color: orange;">{</b> <br>
  ${CSSnbsp} ${CSSstyleName}width${endSpan}: ${CSSstyleValue}${document.querySelector(".width").value}%${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}height${endSpan}: ${CSSstyleValue}${document.querySelector(".height").value}%${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}background-color${endSpan}: <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".bg_color").value};">${document.querySelector(".bg_color").value}</b>; <br>
  ${CSSnbsp} ${CSSstyleName}border${endSpan}: ${CSSstyleValue}${document.querySelector(".borderSize").value}px solid${endSpan} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".border_color").value};">${document.querySelector(".border_color").value}</b>; <br>
  ${CSSnbsp} ${CSSstyleName}border-radius${endSpan}: ${CSSstyleValue}${document.querySelector(".borderRadius").value}px${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}display${endSpan}: ${CSSstyleValue}${document.querySelector(".display").value}${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}justify-content${endSpan}: ${CSSstyleValue}${document.querySelector(".justifyContent").value}${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}align-items${endSpan}: ${CSSstyleValue}${document.querySelector(".alignItems").value}${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}flex-wrap${endSpan}: ${CSSstyleValue}${document.querySelector(".flexWrap").value}${endSpan}; <br>



  ${CSSnbsp} ${CSSstyleName}font-size${endSpan}: ${CSSstyleValue}${document.querySelector(".fontSize").value}%${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}font-weight${endSpan}: ${CSSstyleValue}1000${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}color${endSpan}: <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color").value};">${document.querySelector(".text_color").value}</b>; <br>
  ${CSSnbsp} ${CSSstyleName}font-family${endSpan}: ${CSSstyleValue}monospace${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}text-align${endSpan}: ${CSSstyleValue}${document.querySelector(".textAlign").value}${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}text-wrap${endSpan}: ${CSSstyleValue}${document.querySelector(".textWrap").value}${endSpan}; <br>
  ${CSSnbsp} ${CSSstyleName}text-shadow${endSpan}: <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}1.41px 1.41px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}2px 0px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}1.41px -1.41px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}0px -2px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}-1.41px -1.41px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}-2px 0px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}-1.41px 1.41px${endSpan}, <br>
  ${CSSnbsp}  ${nbspMore} <b class="js_ganereteCodeBorder" style="color: ${document.querySelector(".text_color_border").value};">${document.querySelector(".text_color_border").value}</b> ${CSSstyleValue}0px 2px${endSpan}; <br>
<b style="color: orange;">}</b>
  <br>
  <br>
  <br>
  `

  document.querySelector("#ganereteCode_modal_HTML").innerHTML= `<b style="color: #0099ff;">&lt;div</b> <span style="color: orange;">class=<span style="color: #01ff80;">"box"</span></span><b style="color: #0099ff;">&gt;</b>`+document.querySelector(".set_text").value+'<b style="color: #0099ff;">&lt;div&gt;</b>'


})





document.querySelector(".ganereteCode_modal_HTML_copyBTN").addEventListener("click", ()=>{
  var text = document.getElementById("ganereteCode_modal_HTML");
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Cod nusxalandi !")
})



document.querySelector(".ganereteCode_modal_CSS_copyBTN").addEventListener("click", ()=>{
  var text = document.getElementById("ganereteCode_modal_CSS");
  var range = document.createRange();
  range.selectNode(text);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Cod nusxalandi !")
})