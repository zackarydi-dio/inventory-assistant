// Step 1: Create and Initialize Variables

let itemName = "USB-C Cable";          
let unitCost = 3.25;                  
let currentStock = 120;               
let reorderLevel = 50;                
let targetStock = 200;                
let weeklyDemand = 25;                
let supplierLeadTimeWeeks = 4;         

// Step 2: Calculate Inventory Metrics

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
weeksOfCover = +weeksOfCover.toFixed(2); 

let stockDeficit = Math.max(0, targetStock - currentStock);

let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

let reorderQuantity = reorderNow ? Math.ceil(stockDeficit) : 0;

let estimatedReorderCost = reorderQuantity * unitCost;

// Step 3: Print to Console

console.log("Item Name: " + itemName);
console.log("Weeks of Cover: " + weeksOfCover);
console.log("Reorder Now? " + reorderNow);
console.log("Recommended Reorder Quantity: " + reorderQuantity);
console.log("Estimated Cost: $" + estimatedReorderCost.toFixed(2));
