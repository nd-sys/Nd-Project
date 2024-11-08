function updateStatPercentage() {
  // Set the range for the variation
  const minPercentage = 115;
  const maxPercentage = 125;

  // Generate a random percentage within the specified range
  const randomPercentage = (Math.random() * (maxPercentage - minPercentage) + minPercentage).toFixed(1);

  // Update the stat percentage in the DOM
  document.getElementById('stat-percentage').textContent = `${randomPercentage}%`;
}

// Update the percentage immediately, and then every minute (60000 milliseconds)
updateStatPercentage();
setInterval(updateStatPercentage, 600);

