const luz=document.querySelector("#luz")

luz.addEventListener("click",  () => {
	if(luz.innerText== 'brightness_4'){
		document.body.style.backgroundColor = "black"
		luz.innerText="brightness_low"
		luz.classList.add("mystyle")
}
 
   else if(luz.innerText=="brightness_low" ){
   	luz.innerText= 'brightness_4'   	
       document.body.style.backgroundColor = "white"
   
}

	console.log(luz.innerText)
})

