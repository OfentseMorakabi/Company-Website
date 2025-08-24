// Track inventory of minerals
let inventory = {
	ironOre: 1000,
	coal: 500,
	copper: 300
};

// Log a shipment
function logShipment(mineral, amount, destination) {
	if (inventory[mineral] >= amount) {
		inventory[mineral] -= amount;
		console.log(`Shipped ${amount} tons of ${mineral} to ${destination}.`);
	} else {
		console.log(`Not enough ${mineral} in inventory for shipment.`);
	}
}

// Example usage
logShipment('ironOre', 200, 'Port A');
console.log('Current inventory:', inventory);
