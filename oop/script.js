function showForm(animal) {
  document.getElementById("dogForm").style.display = "none";
  document.getElementById("catForm").style.display = "none";
  document.getElementById("birdForm").style.display = "none";

  document.getElementById(animal + "Form").style.display = "block";
}
function displayResults(formData) {
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h2></h2><br />";
  var labels = {
    dogName: "Name",
    dogAge: "Age",
    doglegs: "Legs",
    dogfur: "Fur",
    dogtail: "Tail",
    dogmuzzle: "Muzzle",
    catName: "Name",
    catAge: "Age",
    catlegs: "Legs",
    cattail: "Tail",
    catwhiskers: "Whiskers",
    birdname: "Name",
    birdage: "Age",
    birdlegs: "Legs",
    birdwings: "Wings",
    birdbeak: "Beak",
    // Add more labels for other fields as needed
  };
  for (var pair of formData.entries()) {
    var label = document.createElement("label");
    label.textContent = labels[pair[0]] + ":";
    var value = document.createElement("span");
    value.textContent = pair[1];
    resultDiv.appendChild(label);
    resultDiv.appendChild(value);
    resultDiv.appendChild(document.createElement("br")); // Add additional line break for spacing
  }
  resultDiv.style.display = "block"; // Display the result div after setting its content
}
