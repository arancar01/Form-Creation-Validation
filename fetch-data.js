// Define the async function to fetch user data
async function fetchUserData() {
    // Declare the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the data container where the user data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    try {
        // Fetch the data asynchronously from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON format
        const users = await response.json();
        
        // Clear the loading message
        dataContainer.innerHTML = '';
        
        // Create a <ul> element to hold the user names
        const userList = document.createElement('ul');
        
        // Loop through the users array and create a list item for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the text of the list item to the user's name
            userList.appendChild(listItem); // Append the list item to the <ul> element
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the existing content and display an error message if fetching fails
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
