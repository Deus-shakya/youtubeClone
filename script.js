let template= document.getElementById("boxClone")


let data= [
//ma data will be here

]

data.forEach((item)=>{
  let clone=document.importNode(template,true)
  item.img1.style.backgroundImage= 'url(img/img1.jpeg)';//image data given by the data array
  //and so on


})
