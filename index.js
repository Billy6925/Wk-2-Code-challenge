document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('itemButton');
    const shoppingList = document.getElementById('itemList');
    const clearButton = document.getElementById('clearButton');
    let items = [];

    // Function to display items in the list
    const displayItems = () => {
        shoppingList.innerHTML = ''; // Clear the current list
        items.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = item.text;
            if (item.purchased) {
                listItem.style.textDecoration = "line-through";
                listItem.style.backgroundColor = "#d3d3d3"; // Light grey background
            }
            listItem.addEventListener('click', () => markAsPurchased(index));
            shoppingList.appendChild(listItem);
        });
    };

    // Function to add new item to the list
    const addItem = () => {
        const itemText = itemInput.value.trim();
        if (itemText !== "") {
            items.push({ text: itemText, purchased: false });
            displayItems();
            itemInput.value = ''; // Clear the input field after adding the item
        }
    };

    // Function to mark item as purchased
    const markAsPurchased = (index) => {
        items[index].purchased = true;
        displayItems();
    };

    // Function to clear all items from the list
    const clearList = () => {
        items = [];
        displayItems();
    };

    // Event listener for the "Add" button
    addButton.addEventListener('click', addItem);

    // Event listener for the "Clear List" button
    clearButton.addEventListener('click', clearList);
});
