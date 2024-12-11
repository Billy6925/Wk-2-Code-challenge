document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('itemButton');
    const shoppingList = document.getElementById('shoppingList');
    const clearButton = document.getElementById('clearButton');

    // Function to add new item to the list
    const addItem = () => {
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            const listItem = document.createElement('li');
            listItem.textContent = itemText;
            listItem.addEventListener('click', markAsPurchased);
            shoppingList.appendChild(listItem);

            // Clear the input field after adding the item
            itemInput.value = '';
        }
    };

    // Function to mark item as purchased
    const markAsPurchased = (event) => {
        const listItem = event.target;
        listItem.style.textDecoration = "line-through";
        listItem.style.backgroundColor = "#d3d3d3"; // Light grey background
    };

    // Function to clear all items from the list
    const clearList = () => {
        shoppingList.innerHTML = '';
    };

    // Event listener for the "Add" button
    addButton.addEventListener('click', addItem);

    // Event listener for the "Clear List" button
    clearButton.addEventListener('click', clearList);
});
