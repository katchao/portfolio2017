// random bg generator
function rollBg() {
   $(".bg.hidden").css("background", newGradient());
   $(".bg").toggleClass("hidden");
}

// random bg generator
function newGradient() {
   var c1 = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
   };
   var c2 = {
      r: Math.floor(Math.random() * 255),
      g: Math.floor(Math.random() * 255),
      b: Math.floor(Math.random() * 255),
   };

   c1.rgb = "rgba(" + c1.r + "," + c1.g + "," + c1.b + ", 0.8)";
   c2.rgb = "rgba(" + c2.r + "," + c2.g + "," + c2.b + ", 0.8)";
   return "radial-gradient(at top left, " + c1.rgb + ", " + c2.rgb + ")";
}

export default rollBg;

/* credits:
   animated background: http://www.jqueryscript.net/animation/Creating-Animated-Background-with-Random-Gradient-Transitions-using-jQuery.html
*/
