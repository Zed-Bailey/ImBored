

const baseUrl = "https://www.boredapi.com/api/activity/";

async function getRandom() {
    const res = await fetch(baseUrl);
    return res.json();
}

function updateCardWithDetails(details) {
    document.getElementById("cardTitle").innerHTML = details['activity'];
    document.getElementById("activityType").innerHTML = details['type'];

    document.getElementById("participants").innerHTML = '🧍'.repeat(details['participants']);
    document.getElementById("price").innerHTML = '💸'.repeat(details['price'] * 10);
    document.getElementById("accessibility").innerHTML = details['accessibility'] * 10;

}

async function btnPressed() {
    console.log("btn pressed");
    // funky fade in/out effect on the card
    let card = document.getElementById("card");
    card.className = card.className.replace("visible", "hidden");
    var activity = await getRandom();
    updateCardWithDetails(activity)

    card.className = card.className.replace("hidden", "visible");
}