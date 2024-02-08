<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php 
    
    /*
    DESCRIPTION:
    Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

    For example (Input --> Output):

    39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
    999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
    4 --> 0 (because 4 is already a one-digit

    Answer:
    */ 

    function persistence($num) {
        $count = 0;

        while ($num >= 10) {
            $digits = str_split($num);
            $num = array_product($digits);
            $count++;
        }
        
        return $count;
    }

    // Test cases
    echo persistence(39);  // Output: 3
    echo persistence(999); // Output: 4
    echo persistence(4);   // Output: 0

    ?>
    
    


  <!--
  This script places a badge on your repl's full-browser view back to your repl's cover
  page. Try various colors for the theme: dark, light, red, orange, yellow, lime, green,
  teal, blue, blurple, magenta, pink!
  -->
  <script src="https://replit.com/public/js/replit-badge-v2.js" theme="dark" position="bottom-right"></script>
  </body>
</html>