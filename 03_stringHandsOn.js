function stringHandsOn(){
        var sentence = "   Hey you are doing good, keep it up   ";
        console.log(`Step 1 : The Given string is - ${sentence}`);
        console.log(`Step 2 : Length of the string - ${sentence.length}`);
        var sentenceAfterTrim = sentence.trim();
        console.log(`Step 3 : String after Trim - ${sentenceAfterTrim}`);
        console.log(`Step 4 : Length of extra number of spaces removed in step 3 are - ${sentence.length-sentenceAfterTrim.length}`);
        console.log(`Step 5 : First Character - ${sentenceAfterTrim.charAt(0)} Last Character - ${sentenceAfterTrim.charAt(33)}`);
        var resultValue = sentenceAfterTrim.split(" ");
        //console.log(resultValue);
        console.log(`Step 6 : Count of total number of words available in string after step 3 - ${resultValue.length}`);
        console.log(`Step 7 : Index of word "good" from the given string is - ${sentenceAfterTrim.indexOf("good")}`);
        console.log(`Step 8 : Substring starting from index 22 is - ${sentenceAfterTrim.substring(22)}`);
        console.log(`Step 9 : Check the string ends with word "up" after step 3 - ${sentenceAfterTrim.includes("up")}`);
        console.log(`Step 9 : Check the string starts with word "Hey" after trimming - ${sentenceAfterTrim.includes("Hey")}`);

}       
stringHandsOn()