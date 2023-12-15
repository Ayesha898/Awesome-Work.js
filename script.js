
function findAnimalLegs() {
    var inputChicken = parseFloat(document.getElementById("inputChicken").value);
    var inputCow = parseFloat(document.getElementById("inputCow").value);
    var inputPig = parseFloat(document.getElementById("inputPig").value);

    var legsChicken = inputChicken * 2;
    var legsCow = inputCow * 4;
    var legsPig = inputPig * 4;


    var totalChickens = inputChicken * 1;
    var totalCows = inputCow * 1;
    var totalPigs = inputPig * 1;

    document.getElementById('totalChickens').innerHTML= totalChickens;
    document.getElementById('totalCows').innerHTML = totalCows;
    document.getElementById('totalPigs').innerHTML = totalPigs;

    document.getElementById('counterChicken').innerHTML = legsChicken;
    document.getElementById('counterCow').innerHTML = legsCow;
    document.getElementById('counterPig').innerHTML = legsPig;
   

    var totalLegs = legsChicken + legsCow + legsPig;
    document.getElementById('totalLegs').textContent = 'Total Legs: ' + totalLegs;
}

