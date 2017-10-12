var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  var worlds = document.getElementById('planets');
  
  for(var i = 0; i < planets.length; i++){
      var names = planets[i];
      var opt = document.createElement('option');
      opt.textContent = names[0];
      opt.value = names[0];
      worlds.appendChild(opt);
  }

 function calculateWeight(userWeight, planetName) {
    for (var i = 0; i < planets.length; i++) {
      if (planets[i][0] == planetName) {
      return userWeight * planets[i][1];
      }
    }
}
function handleClickEvent() {
    console.log("inside clickevent");
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);
    document.getElementById("output").innerHTML = "If you were on  " + planetName + "," + " you would weigh  " + result + "lbs!";
}
document.getElementById('calculate-button').onclick=handleClickEvent;

