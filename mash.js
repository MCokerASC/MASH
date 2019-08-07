function mash() {
  return getHome();
}

function getHome() {
  const home = ["Mansion", "Aparatment", "Shack", "house"];
  const homeLength =  home.length
  
  const randomIndex = random(homeLength)
  return home[randomIndex];
  //   return Math.floor((Math.random()*(4)))
}
function getChildrenCount() {
  return Math.floor(Math.random() * 4);
}
function random(num) {
  return Math.floor(Math.random() * num);
}

console.log(mash());


