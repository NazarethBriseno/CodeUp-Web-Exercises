    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);
    let planetsString1 = planetsArray.join("<br>")
    console.log(planetsString1);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    function zatannaMagic(string){
        let commandArray = string.toLowerCase().split(" ");
        for(let i = 0; i < commandArray.length; i++){
         commandArray[i] = (commandArray[i].split('').reverse().join(''))
        }
        let command = commandArray.join(' ') + "!";
       return command.charAt(0).toUpperCase() + command.slice(1);
    }