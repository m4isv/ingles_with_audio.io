const x=document.querySelector("#myAudio")
const play=document.querySelector("#play")
const pause=document.querySelector("#pause")



play.addEventListener('click',() => {
	x.play()
})



pause.addEventListener('click',() => {
	x.pause()
})



