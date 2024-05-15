// Get the current date
var currentDate = new Date();

// Calculate the date 275 days ago
var daysAgo = 275;
var pastDate = new Date(currentDate);
pastDate.setDate(currentDate.getDate() - daysAgo);

// Display the date in a specific format
var formattedDate = pastDate.toDateString(); // Change the format according to your preference

console.log(formattedDate); // Output the formatted date
