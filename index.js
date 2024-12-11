document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('itemButton');
    const shoppingList = document.getElementById('itemList');
    const clearButton = document.getElementById('clearButton');
     let items = []; 

     //Function to display items in the list
     const displayItems = () => {
        shoppingList.innerHTML = '';//clear the current list
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
                //Function to add a new item to the list
                const addItem = () => { 
                const itemText = itemInput.value.trim();
                if (itemText !== "") {

