document.addEventListener("DOMContentLoaded", () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('itemButton');
    const shoppingList = document.getElementById('itemList');
    const clearButton = document.getElementById('clearButton');
     let items = []; 

     //Function to display items in the list
     const displayItems = () => {
        { shoppingList.innerHTML = '';//clear the current list
            items.forEach((item, index) => {
                const listItem = document.createElement('li'); 
                listItem.textContent = item.text;
