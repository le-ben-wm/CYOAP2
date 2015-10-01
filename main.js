//This is the basic skeleton that lists the start
alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
    "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
    "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");
switch (startGame) {
    case "defend":
        break;
    case "mothership":
        break;
    case "talk":
        var speakWithLeader = prompt("Your meeting with the leader of the methera invaders is going very well, until you see a sharp object hanging above you" +
            "Do you continue the meeting or run back to your planet?")
             
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