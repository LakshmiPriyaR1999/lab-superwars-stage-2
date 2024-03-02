const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    function initPlayers() {
        const playersData = [
            "Spiderman",
            "Captain America",
            "Wonderwoman",
            "Popcorn",
            "Gemwoman",
            "Bolt",
            "Antwoman",
            "Mask",
            "Tiger",
            "Captain",
            "Catwoman",
            "Fish",
            "Hulk",
            "Ninja",
            "Black Cat",
            "Volverine",
            "Thor",
            "Slayer",
            "Vader",
            "Slingo"
            // Add other Super Heroes and Super Villains as needed
        ];
    
        const players = [];
    
        for (let i = 0; i < playersData.length; i++) {
            const player = {
                name: playersData[i],
                strength: getRandomStrength(), // Using the function from Progression 2
                image: `superwars-basic1.png`,
                type: i % 2 === 0 ? "hero" : "villain", // Alternating between hero and villain
                // You can use your own logic for determining the type
            };
    
            players.push(player);
        }
    
        return players;
    }
    

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    // Return a random integer (0,100]
    // Note: You can use Math.random() and Math.ceil()
    function getRandomStrength() {
        // Generate a random number between 1 and 100
        const randomStrength = Math.floor(Math.random() * 100) + 1;
        return randomStrength;
    }
    
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here
    function buildPlayers(players) {
        let playersHTML = '';
    
        for (let i = 0; i < players.length; i++) {
            // Accumulate HTML template for each player
            playersHTML += `
                <div class="player">
                    <img src="${players[i].image}">
                    <div class="name">${players[i].name}</div>
                    <div class="strength">${players[i].strength}</div>
                </div>
            `;
        }
    
        return playersHTML;
    }
    

    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}