/* Task:

DESCRIPTION:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

Answer:
*/

function areYouPlayingBanjo(name) {
    let name1 = name.split('')
    let name2 = name1[0]
    if (name2[0] === 'r' || name2[0] === 'R'){
      return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
  }
  
  
  console.log(areYouPlayingBanjo('ruth'))    
  console.log(areYouPlayingBanjo('RONNIE')) 
  console.log(areYouPlayingBanjo('Roxy'))
  console.log(areYouPlayingBanjo('Luth'))
  console.log(areYouPlayingBanjo('enny'))
  

