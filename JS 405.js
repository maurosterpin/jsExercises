let wizard = {
    name: "Albus",
    lastName: "Dumbledore",
    birthVillage: {
        name: "Mould-on-the-Wold",
        country: "England"
    },
    masteredSpells: ["Elemental Magic" , "Transfiguration", "Charms"],
    acquaintances: [
        {
        name: "Harry",
        lastName: "Potter",
        },
        {
        name: "Severus",
        lastName: "Snape",
        },

    ]
}

console.log("Name of birth country: " + wizard.birthVillage.country)
console.log("Name of acquaintance: " + wizard.acquaintances[0].name)
