import './style.css'

const theme1Btn = document.querySelector('#theme-1')
const theme2Btn = document.querySelector('#theme-2')
const theme3Btn = document.querySelector('#theme-3')
const bgElm = document.querySelector('#bg')
const calctopElm = document.querySelector("#calc-top")
const themeText = document.querySelector("#theme-text")
const themeTogglerBg = document.querySelector("#theme-toggler")
const calcScreenElm = document.querySelector("#calc-screen")
const calcKeypadBg = document.querySelector("#calc-keypad")
const numKeys = document.querySelectorAll('.num-keys')
const resetBtn = document.querySelector("#reset-key")
const equalBtn = document.querySelector("#equal-key")
const delBtn = document.querySelector("#delete-key")
const calcOutput = document.querySelector("#calc-output")
const numberButtons = document.querySelectorAll('[data-number]')




if(theme1Btn.checked === true){
  bgElm.style.background = "hsl(222,26%,31%)"
  calctopElm.classList.add('text-white')
  themeText.classList.add('text-white')
  calcScreenElm.classList.add('bg-theme1screenbgcolor')
  themeTogglerBg.classList.add('bg-theme1keypadandtogglebgcolor')
  calcScreenElm.classList.add('text-white')
  calcKeypadBg.classList.add('bg-theme1keypadandtogglebgcolor')
  resetBtn.classList.add('bg-theme1keybgcolor')
  resetBtn.classList.add('shadow-theme1key')
  equalBtn.classList.add('bg-theme1redkey')
  equalBtn.classList.add('shadow-theme1redkeys')
  delBtn.classList.add('bg-theme1keybgcolor')
  delBtn.classList.add('shadow-theme1key')
  resetBtn.classList.remove('bg-theme2keycolor')
  resetBtn.classList.remove('shadow-theme2key')
  resetBtn.classList.remove('shadow-theme3')
  equalBtn.classList.remove('bg-theme2orangekeybg')
  delBtn.classList.remove('bg-theme2keycolor')
  delBtn.classList.remove('shadow-theme2key')
  delBtn.classList.remove('shadow-theme3')
  resetBtn.classList.remove('bg-theme3keycolor')
  delBtn.classList.remove('bg-theme3keycolor')
  equalBtn.classList.remove('bg-theme3cyankeybg')
  equalBtn.classList.remove('shadow-theme3cyankeys')
  calctopElm.classList.remove('text-theme2numtext')
  calctopElm.classList.remove('text-theme3numtext')
  calcScreenElm.classList.remove('bg-white')
  calcScreenElm.classList.remove('bg-theme3keypadtogglebgandscreencolor')
  themeText.classList.remove('text-theme2numtext')
  themeText.classList.remove('text-theme3numtext')
  themeTogglerBg.classList.remove('bg-theme2keypadandtogglebgcolor')
  themeTogglerBg.classList.remove('bg-theme3keypadtogglebgandscreencolor')
  calcScreenElm.classList.remove('text-theme2numtext')
  calcScreenElm.classList.remove('text-theme3numtext')
  calcKeypadBg.classList.remove('bg-theme2keypadandtogglebgcolor')
  calcKeypadBg.classList.remove('bg-theme3keypadtogglebgandscreencolor')


  theme1Btn.style.background = 'hsl(6, 63%, 50%)'
  theme2Btn.style.background = 'hsl(223,31%,20%)'
  theme3Btn.style.background = 'hsl(223,31%,20%)'

  
  numKeys.forEach((numKey) => {
    numKey.classList.add('bg-theme1lightgrayorange')
    numKey.classList.add('text-theme1numtext')
    numKey.classList.add('shadow-theme1')
    numKey.classList.remove('shadow-theme2')
    numKey.classList.remove('shadow-theme3')
    numKey.classList.remove('bg-theme2lightgrayyellow') 
    numKey.classList.remove('bg-theme3darkviolet')
    numKey.classList.remove('text-theme2numtext') 
    numKey.classList.remove('text-theme3numtext')


   })

}

if(theme2Btn.checked === true){

  bgElm.style.background = "hsl(0, 0%, 90%)"
  calctopElm.classList.add('text-theme2numtext')
  themeText.classList.add("text-theme2numtext")
  calcScreenElm.classList.add('bg-white')
  themeTogglerBg.classList.add('bg-theme2keypadandtogglebgcolor')
  calcScreenElm.classList.add('text-theme2numtext')
  calcKeypadBg.classList.add('bg-theme2keypadandtogglebgcolor')
  resetBtn.classList.add('bg-theme2keycolor')
  resetBtn.classList.add('shadow-theme2key')
  equalBtn.classList.add('bg-theme2orangekeybg')
  

  delBtn.classList.add('bg-theme2keycolor')
  delBtn.classList.add('shadow-theme2key')
  resetBtn.classList.remove('bg-theme3keycolor')
  resetBtn.classList.remove('shadow-theme3')
  delBtn.classList.remove('bg-theme3keycolor')
  delBtn.classList.remove('shadow-theme3')
  equalBtn.classList.remove('bg-theme3cyankeybg')
  equalBtn.classList.remove('shadow-theme3cyankeys')
  calcScreenElm.classList.remove('bg-theme3keypadtogglebgandscreencolor')
  themeText.classList.remove('text-white')
  themeText.classList.remove('text-theme3numtext')
  calctopElm.classList.remove("text-theme3numtext")
  calcScreenElm.classList.remove('text-theme3numtext')
  themeTogglerBg.classList.remove("bg-theme1keypadandtogglebgcolor")
  themeTogglerBg.classList.remove("bg-theme3keypadtogglebgandscreencolor")
  theme2Btn.style.background = "hsl(25, 98%, 40%)"
  theme1Btn.style.background = "hsl(0, 5%, 81%)"
  theme3Btn.style.background = "hsl(0, 5%, 81%)"

  numKeys.forEach((numKey) => {
    numKey.classList.add('bg-theme2lightgrayyellow')
    numKey.classList.add('text-theme2numtext')
    numKey.classList.add('text-theme2numtext')
    numKey.classList.add('shadow-theme2')
    numKey.classList.remove('shadow-theme1')
    numKey.classList.remove('shadow-theme3')
    numKey.classList.remove('text-theme3numtext')
    numKey.classList.remove('bg-theme3darkviolet') 
   })

}


theme1Btn.addEventListener("click", (e) => {
  if(e.target.checked === true){
    bgElm.style.background = "hsl(222,26%,31%)"
    calctopElm.classList.add('text-white')
    themeText.classList.add('text-white')
    calcScreenElm.classList.add('bg-theme1screenbgcolor')
    themeTogglerBg.classList.add('bg-theme1keypadandtogglebgcolor')
    calcScreenElm.classList.add('text-white')
    calcKeypadBg.classList.add('bg-theme1keypadandtogglebgcolor')
    resetBtn.classList.add('bg-theme1keybgcolor')
    resetBtn.classList.add('shadow-theme1key')
    equalBtn.classList.add('bg-theme1redkey')
    equalBtn.classList.add('shadow-theme1redkeys')
    delBtn.classList.add('bg-theme1keybgcolor')
    delBtn.classList.add('shadow-theme1key')
    resetBtn.classList.remove('bg-theme2keycolor')
    resetBtn.classList.remove('shadow-theme2key')
    resetBtn.classList.remove('shadow-theme3')
    equalBtn.classList.remove('bg-theme2orangekeybg')
    delBtn.classList.remove('bg-theme2keycolor')
    delBtn.classList.remove('shadow-theme2key')
    delBtn.classList.remove('shadow-theme3')
    resetBtn.classList.remove('bg-theme3keycolor')
    delBtn.classList.remove('bg-theme3keycolor')
    equalBtn.classList.remove('bg-theme3cyankeybg')
    equalBtn.classList.remove('shadow-theme3cyankeys')
    calctopElm.classList.remove('text-theme2numtext')
    calctopElm.classList.remove('text-theme3numtext')
    calcScreenElm.classList.remove('bg-white')
    calcScreenElm.classList.remove('bg-theme3keypadtogglebgandscreencolor')
    themeText.classList.remove('text-theme2numtext')
    themeText.classList.remove('text-theme3numtext')
    themeTogglerBg.classList.remove('bg-theme2keypadandtogglebgcolor')
    themeTogglerBg.classList.remove('bg-theme3keypadtogglebgandscreencolor')
    calcScreenElm.classList.remove('text-theme2numtext')
    calcScreenElm.classList.remove('text-theme3numtext')
    calcKeypadBg.classList.remove('bg-theme2keypadandtogglebgcolor')
    calcKeypadBg.classList.remove('bg-theme3keypadtogglebgandscreencolor')


    theme1Btn.style.background = 'hsl(6, 63%, 50%)'
    theme2Btn.style.background = 'hsl(223,31%,20%)'
    theme3Btn.style.background = 'hsl(223,31%,20%)'

    numKeys.forEach((numKey) => {
     numKey.classList.add('bg-theme1lightgrayorange')
     numKey.classList.add('text-theme1numtext')
     numKey.classList.add('shadow-theme1')
     numKey.classList.remove('shadow-theme2')
     numKey.classList.remove('shadow-theme3')
     numKey.classList.remove('bg-theme2lightgrayyellow') 
     numKey.classList.remove('bg-theme3darkviolet')
     numKey.classList.remove('text-theme2numtext') 
     numKey.classList.remove('text-theme3numtext')


    })
  }
})



theme2Btn.addEventListener("click", (e) => {
  if(e.target.checked === true){
    bgElm.style.background = "hsl(0, 0%, 90%)"
    calctopElm.classList.add('text-theme2numtext')
    themeText.classList.add("text-theme2numtext")
    calcScreenElm.classList.add('bg-white')
    themeTogglerBg.classList.add('bg-theme2keypadandtogglebgcolor')
    calcScreenElm.classList.add('text-theme2numtext')
    calcKeypadBg.classList.add('bg-theme2keypadandtogglebgcolor')
    resetBtn.classList.add('bg-theme2keycolor')
    resetBtn.classList.add('shadow-theme2key')
    equalBtn.classList.add('bg-theme2orangekeybg')
    

    delBtn.classList.add('bg-theme2keycolor')
    delBtn.classList.add('shadow-theme2key')
    resetBtn.classList.remove('bg-theme3keycolor')
    resetBtn.classList.remove('shadow-theme3')
    delBtn.classList.remove('bg-theme3keycolor')
    delBtn.classList.remove('shadow-theme3')
    equalBtn.classList.remove('bg-theme3cyankeybg')
    equalBtn.classList.remove('shadow-theme3cyankeys')
    calcScreenElm.classList.remove('bg-theme3keypadtogglebgandscreencolor')
    themeText.classList.remove('text-white')
    themeText.classList.remove('text-theme3numtext')
    calctopElm.classList.remove("text-theme3numtext")
    calcScreenElm.classList.remove('text-theme3numtext')
    themeTogglerBg.classList.remove("bg-theme1keypadandtogglebgcolor")
    themeTogglerBg.classList.remove("bg-theme3keypadtogglebgandscreencolor")
    theme2Btn.style.background = "hsl(25, 98%, 40%)"
    theme1Btn.style.background = "hsl(0, 5%, 81%)"
    theme3Btn.style.background = "hsl(0, 5%, 81%)"
  
    numKeys.forEach((numKey) => {
      numKey.classList.add('bg-theme2lightgrayyellow')
      numKey.classList.add('text-theme2numtext')
      numKey.classList.add('text-theme2numtext')
      numKey.classList.add('shadow-theme2')
      numKey.classList.remove('shadow-theme1')
      numKey.classList.remove('shadow-theme3')
      numKey.classList.remove('text-theme3numtext')
      numKey.classList.remove('bg-theme3darkviolet') 
     })

  
  }
})

theme3Btn.addEventListener("click", (e) => {
  if(e.target.checked === true){
    bgElm.style.background = "hsl(268, 75%, 9%)"
    calctopElm.classList.add('text-theme3numtext')
    calcScreenElm.classList.add('bg-theme3keypadtogglebgandscreencolor')
    themeTogglerBg.classList.add('bg-theme3keypadtogglebgandscreencolor')
    themeText.classList.add('text-theme3numtext')
    calcScreenElm.classList.add('text-theme3numtext')
    calcKeypadBg.classList.add('bg-theme3keypadtogglebgandscreencolor')
    resetBtn.classList.add('bg-theme3keycolor')
    resetBtn.classList.add('shadow-theme3')
    equalBtn.classList.add('bg-theme3cyankeybg')
    equalBtn.classList.add('shadow-theme3cyankeys')
    delBtn.classList.add('bg-theme3keycolor')
    delBtn.classList.add('shadow-theme3')
    resetBtn.classList.remove('shadow-theme2key')
    delBtn.classList.remove('shadow-theme2key')
    calctopElm.classList.remove('text-theme2numtext');
    calctopElm.classList.remove('text-white');
    calcScreenElm.classList.remove('bg-theme1screenbgcolor')
    calcScreenElm.classList.remove('bg-white')
    themeTogglerBg.classList.remove('bg-theme1keypadtogglebgandscreencolor')
    themeTogglerBg.classList.remove('bg-theme2keypadandtogglebgcolor')
    calcKeypadBg.classList.remove('bg-theme2keypadandtogglebgcolor')
    theme3Btn.style.background = "hsl(176, 100%, 44%)"
    theme1Btn.style.background = "hsl(268, 71%, 12%)"
    theme2Btn.style.background = "hsl(268, 71%, 12%)"


    numKeys.forEach((numKey) => {
      numKey.classList.add('bg-theme3darkviolet')
      numKey.classList.add('text-theme3numtext')
      numKey.classList.add('shadow-theme3')
      numKey.classList.remove('theme1numtext')
      numKey.classList.remove('theme2numtext')
      numKey.classList.remove('shadow-theme2')

     })
  }
})





class Calculator {
  constructor(prevInputElm, currInputElm) {
    this.prevInputElm = prevInputElm
    this.currInputElm = currInputElm
  }

  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
}

const calculator = new Calculator()


numberButtons.forEach((numbutton) => {
  numbutton.addEventListener('click', (e) => {
    calculator.appendNumber(e.target.children[0].textContent)
  })
})


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
   theme1Btn.checked = true
} else {
   theme2Btn.checked = true
}
