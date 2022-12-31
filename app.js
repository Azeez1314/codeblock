// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing" => "camel Casing"
// "identifier" => "identifier"
// "" => ""

function breakCamelCase(str){
    // split character
    // map to get upperCase
    // join characters
    return str.split("")
              .map(l => l === l.toUpperCase() ? ' '+l : l)
              .join("")
  
}

  console.log(breakCamelCase("camelCasing"))
  console.log(breakCamelCase("identifier"))
  console.log(breakCamelCase(""))