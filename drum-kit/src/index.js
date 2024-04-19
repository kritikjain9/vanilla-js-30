//js drum kit
// some buttons - on click will produce a sound
// on click, will add a class on each button to highlight it and make it bigger


// const playButtonSound = (buttonClassName) => {
// console.log(buttonClassName);
//   const sound = new Audio(`./sounds/${buttonClassName}.wav`);
  
//   const button = document.getElementById(buttonClassName);
//   button.addEventListener("click", () => {
//     console.log(`playing ${buttonClassName} sound`);
//     sound.play();
//   });
// };

// js drum kit
const playButtonSound = (buttonId) => {
    console.log(buttonId);
    const sound = new Audio(`./sounds/${buttonId}.wav`);
    console.log(`playing ${buttonId} sound`);
    sound.play();
  };