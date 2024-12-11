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
                items.push({ text: itemText, purchased: false });
                displayItems();
                itemInput.value = '';//clear the input field after adding the item
                }
            };
            //Function to mark item as purchased
            const markAsPurchased = (index) => { 
                items[index].purchased = true;
                 displayItems(); 
                };
                //Function to clear all the items from the list
                const clearList = () => {
                items = []; 
                displayItems();
                };  
                //Event listener for the "add" button
                addButton.addEventListener('click', addItem);
                
                //Event listener for the "clear list" button
                clearButton.addEventListener('click', clearList);
            });


