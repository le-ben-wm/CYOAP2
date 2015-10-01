//This is the basic skeleton that lists the start
alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
    "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
    "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");
switch (startGame) {
    case "defend":
        var defendPlanet = prompt("There's smoke in the air, buildings taller then the clouds for miles on fire. The whole world in front of you is collapsing" +
            "Soldiers and civilians are dying all over and most Commanders have abandoned them. Now everyone on Serenity looks to you for leadership." +
            "Your primary objective is to find and secure Chancellor Keith but you need to get civilians out of danger. You have limited assets. What will you spend them on? Who will you save?" +
            "(chancellor/civilians)");
        break;
    case "mothership":
        break;
    case "talk":
        break;
    case "flee":
        var fleePlanet = prompt("")
        break;
}
/* Work on your own part:
 Andy: Defend
 Nick: Mothership
 Marques: Talk
 Ben: Flee
 */