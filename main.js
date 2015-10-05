//This is the basic skeleton that lists the start
var onPlanet = true;
function offPlanet(){
    onPlanet = false
}


alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
while (onPLanet === true)
    var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
        "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
        "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");


switch (startGame) {
    case "defend":
        var defendPlanet = prompt("There's smoke in the air, buildings taller then the clouds for miles on fire. The whole world in front of you is collapsing. Soldiers and" +
            "civilians are dying all over and most Commanders have abandoned them. Now everyone on Serenity looks to you for leadership. Your primary objective is to find and secure" +
            "Chancellor Keith but you need to get civilians out of danger. You have limited assets. What will you spend them on? Who will you save?  (chancellor/civilians)");

        if (defendPlanet === "chancellor"){
            var serOneChan = prompt("You start sending out scouts and Serenity has been bombarded and turned into a complete war zone. Your scouts come back with good and bad news." +
                "They have found the chancellor injured and brought him back alive but unconscious and injured from a Methera Bot Execution Camp in the capital building. In the process "+
                "however, your scouts let several hundreds of civilians die to keep their cover. A nearby Atrar ship will pick up the Chancellor if you personally escort him to one "+
                "of two LZ's. 1st LZ INTEL: The top of one of the only standing buildings battered by bombardment surrounded by city still actively crawling with Methera Bot-Men. "+
                "2nd LZ INTEL: The tip of a nearby mountain surrounded by wildlife and forest area that is known to have a hidden Bot-Men Battle Battallion camp. (1/2)");

            switch (serOneChan) {
                default:
                    alert("On the way to your objective, you get amushed by a group of SuperBots because the president was traced. I'm Sorry, you have died.");
                    break;
            }

        }else if(defendPlanet === "civilians" ){
            var serOneCiv = prompt("You send out rescue crews to the nearby buildings in the cities and find hundreds of people in the fire. The Methera Bot-Men were looking ford+
            " civilian captives too and your squads sacrifice lots of men to bring those innocent people out of harms way. In the fighting, your command center gets hacked by the enemy "+
            "and plants a message showing you the execution of the Chancellor in what you recognize as the capital building and you see lots of hostages in the background. "+
            "Your men, however, trace that the message from an underground sewer juncture. Your men are demoralized and say they'll do whatever you say only if you go with them. Now, "+
            "Where will you go?  (sewer/capital)");

            if (serOneB === "capital"){
                var capitalWall = prompt("You and your men squirm throught the city avoiding detection to get to the capital building. The building is surrounded by a wall build with "+
                    "Metharian metalwork. Your men silently take out the guards and you're faced with a Quad code lock. You have to hack it. (just type 'ok')");
                if (capitalWall === "ok"){
                    var cwHack = true;
                    function cwHackOff(){
                        cwHack = false;
                    }
                    while (cwHack === true)
                        var cwOne = 1;
                }
            }

        }
        break;



    case "mothership":
        var mothership = prompt("The great commander John Flag called a meeting of the council of the Altrar nation. He rose in front of the council and said" +
            " 'The Altrar nation has taken enough beatings from the Methera Empire. This A.I. race has taken too much from us for to long, now it's time to take the " +
            "fight back to them. We will make our final stand again" +
            " the Methra by (blowing up their mothership/make a final stand in space");
        if(mothership === "blowing up their mothership"){
            var blowingUpTheirMothership = prompt("They destroyed our cities, they destroyed our home, they destroyed our world, and now we will destory their world, " +
                "to avenge ours.' The remaining forces of Altrar Nation gathered in the air ship hangers the next morning to prepare for their final stand Commander " +
                "John Flag was accompaiedn by his two best soldiers, John-117 and Kelly-078  'You have all been trained for this moment, make your last stand count for " +
                " the Altrar nation.' John got into his ship armed with (rifle/nuke)");
                    if(blowingUpTheirMothership === "nuke") {
                        var nuke = prompt("Stuff");
                    }
                    else if(blowingUpTheirMothership === "rifle"){
                        var rifle = prompt("work");
            }
        }
        else if(mothership === "make a final stand in space"){
            console.log("Star Trek");
        }
        break;

    case "talk":
        var speakWithLeader = prompt("Your meeting with the leader of the methera invaders is going very well, until you see a sharp object hanging above you" +
            "Do you continue the meeting or run back to your planet? (continue/run)");
        switch (speakWithLeader){
            case "continue":
                var continueToSpeak = prompt("The Meeting continues and goes swell until the leader asks for a sacrifice or war," +
                    " but he wants the Chancellor do you give it to him? (yes/no)");
                offPlanet();
                switch (continueToSpeak) {
                    case "yes":
                        var yes = prompt("Along with the chancellor dies some of the Atrar Union's deepest secret's. Rumors are that he knew the location and communication codes to a" +
                            " secret military base with extra support ships but there is no such thing on record." +
                            "I guess we'll never know.");
                        break;
                    case "no":
                        var no = prompt("You refused he peace treaty now you start to sword fight with the Methera Empire and he takes a swing at you what do you do " +
                        "roll out of the way, hold the sword sideways to block? (roll/block)");
                        break;
                    case "run":
                        alert("You ran back to the planet");
                }
                switch (no)
                    csa "roll"
                        var roll = prompt("You roll out of the way do you swing yor usorwd backbor run to think of a plan  (swing/plan)"
                            ;
                        break
                    case "block"
                        alert("He hits you sword asd  you fall to  oyour nkesead n eh urns to yofu an kdnees pr head off. GAME OVER!!!!!"!);         }
                switch (roll) {
                    case "swing"
                        valert("You suwn gyoro uswrd andmi ssed, and your ors d got stuck into the ground, and Soren Lynx thae leder of the etMha EMmpires cut inyou ha lf, GAME OVER!!!!!!w)
                    case "plan"
                        var plan = prompt(Y"ou hide in a corner to plan what do you do nw osleep it off or  ")
                }

            case "flee":
                offPlanet();
                alert("As the Methera forces killed all of your friends and family several years ago, you have no attachment " +
                    "to the Atrar Union and decide to flee the planet in the interest of saving your own life. You get in your ship and prepare " +
                    "to take off. With the amount of fuel you have, there are only a few other planets you will be able to reach before you run " +
                    "out. The closest, Nustrye, is an ally of the Atrar Union and would probably welcome you in. However, you might also be seen " +
                    "as a traitor, as you are a commander in the Atrar military. The next planet, Pasleau, is known as a neutral group, often staying " +
                    "out of conflicts and not taking sides in wars. However, because of this, they often do not take in refugees from other " +
                    "nations. The furthest planet you can go to is Shaenga, which is one of the many planets in the galaxy that has not been " +
                    "colonized yet.");
                var fleePlanet = prompt("Which planet do you go to? (nustrye/pasleau/shaenga)");
                switch (fleePlanet) {
                    case "nustrye":
                        var nustrye = prompt("You decide to head to the closest planet, Nustrye. When you arrive on the planet, you are immediately arrested. From what you can tell, " +
                            "the news that you have fled the Atrar Union has already reached Nustrye, and you have been labelled as a traitor. Do you try to break away, " +
                            "or do you resign yourseltfo  yuor fate? (break/away arrest)";
                        switch (nustrye) {
                            case "break":
                                var breakChance = Math.random();
                                if (breakChance >= 5.)
                                    var breakSuccess = prompt("You decide to try to break away. )                                }{
                                else(){
                                    var breakFail= alert("You decide to try to break away. You manage to fight off the first officer, but you are quickly overwhelmed by" ) +
                                        "more. You are arrested and sentenced to death for being a traitor.
                                }
                                break;
                            case "arrest":
                                break;
                        }
                }
                break;
            default:
                alert("Please choose one of the options in the parentheses. Remember, answers are CASE SENSITIVE.")
        }}/* Work on your own part:
 Andy: Defend
 Nick: Mothership
 Marques: Talk
 Ben: Flee
 */
