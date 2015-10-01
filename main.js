//This is the basic skeleton that lists the start
alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
    "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
    "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");
switch (startGame) {
    case "defend":
        var defendPlanet = prompt("");
        break;
    case "mothership":
        break;
    case "talk":
        break;
    case "flee":
        var fleePlanet = prompt("As the Methera forces killed all of your friends and family several years ago, you have no attachment " +
            "to the Atrar Union and decide to flee the planet in the interest of saving your own life. You get in your ship and prepare " +
            "to take off. With the amount of fuel you have, there are only a few other planets you will be able to reach before you run " +
            "out. The closest, Nustrye, is an ally of the Atrar Union ");
        break;
}
/* Work on your own part:
 Andy: Defend
 Nick: Mothership
 Marques: Talk
 Ben: Flee
 */
//test comment push