// List of deputies you can assign to positions
const deputies = ["Cage", "Smith", "Johnson", "Brown"];

// Store who is standing at which position
let positions = {};

function selectDeputy(positionId) {
  const selected = prompt("Select a deputy: " + deputies.join(", "));
  
  if (selected) {
    positions[positionId] = selected;
    alert(`Position ${positionId} is now assigned to: ${selected}`);
  }
}
