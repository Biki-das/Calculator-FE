/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {

      boxShadow: {
        'theme1': '0 4px hsl(28, 16%, 65%)',
        'theme1key': '0 4px hsl(224, 28%, 35%)',
        'theme1redkeys': '0 4px hsl(6, 70%, 34%)',
         
        'theme2': '0 4px hsl(35, 11%, 61%)',
        'theme2key': '0 4px hsl(185, 58%, 25%)',
        'theme2orangekeys': '0 4px hsl(25, 99%, 27%)',

        'theme3': '0 4px hsl(290, 70%, 36%)',
        'theme3key': '0 4px hsl(185, 58%, 25%)',
        'theme3cyankeys': '0 4px hsl(177, 92%, 70%)',
      },

      colors: {
      //Theme 1 

      theme1bgcolor: 'hsl(222,26%,31%)',
      theme1keypadandtogglebgcolor: 'hsl(223,31%,20%)',
      theme1screenbgcolor: 'hsl(224, 36%, 15%)',
      
      theme1keybgcolor: 'hsl(225, 21%, 49%)',
      theme1keyshadowcolor: 'hsl(224, 28%, 35%)',
      theme1redkey: 'hsl(6, 63%, 50%)',
      theme1redkeyshadowshadow: 'hsl(6, 70%, 34%)',
      theme1lightgrayorange: 'hsl(30, 25%, 89%)',
      theme1grayorangeshadow: 'hsl(28, 16%, 65%)',

      theme1numtext: 'hsl(221, 14%, 31%)',
      theme1buttontext: 'hsl(0, 0%, 100%)',

       //Theme 2 

      theme2bgcolor: 'hsl(0, 0%, 90%)',
      theme2keypadandtogglebgcolor: 'hsl(0, 5%, 81%)',
      theme2screenbgcolor: 'hsl(0, 0%, 93%)',
      
      theme2keycolor: 'hsl(185,42%, 37%)',
      theme2keyshadowcolor: 'hsl(185, 58%, 25%)',
      theme2orangekeybg: 'hsl(25, 98%, 40%)',
      theme2darkorangkeyshadow: 'hsl(25, 99%, 27%)',
      theme2lightgrayyellow: 'hsl(45, 7%, 89%)',
      theme2darkgrayorange: 'hsl(35, 11%, 61%)',

      theme2numtext: 'hsl(60, 10%, 19%)',
      theme2buttontext: 'hsl(0, 0%, 100%)',

      //Theme 3

      theme3bgcolor: 'hsl(268, 75%, 9%)',
      theme3keypadtogglebgandscreencolor: 'hsl(268, 71%, 12%)',
      
      theme3keycolor: 'hsl(281, 89%, 26%)',
      theme3keyshadowcolor: 'hsl(285, 91%, 52%)',
      theme3cyankeybg: 'hsl(176, 100%, 44%)',
      theme3softcyankeyshadow: 'hsl(177, 92%, 70%)',
      theme3darkviolet: 'hsl(268, 47%, 21%)',
      theme3darkmagenta: 'hsl(290, 70%, 36%)',
      

      theme3numtext: 'hsl(52, 100%, 62%)',
      theme3equalcolor: 'hsl(198, 20%, 13%)',
      theme2buttontext: 'hsl(0, 0%, 100%)',

      }
     



    },
  },
  plugins: [],
}
