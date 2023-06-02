function convertToRoman(num) {
    let numRoman = num.toString().split("");
    if(numRoman.length >= 1){
        if(numRoman[numRoman.length -1] === "0"){numRoman[numRoman.length -1] = ""};
        if(numRoman[numRoman.length -1] === "1"){numRoman[numRoman.length -1] = "I"};
        if(numRoman[numRoman.length -1] === "2"){numRoman[numRoman.length -1] = "II"};
        if(numRoman[numRoman.length -1] === "3"){numRoman[numRoman.length -1] = "III"};
        if(numRoman[numRoman.length -1] === "4"){numRoman[numRoman.length -1] = "IV"};
        if(numRoman[numRoman.length -1] === "5"){numRoman[numRoman.length -1] = "V"};
        if(numRoman[numRoman.length -1] === "6"){numRoman[numRoman.length -1] = "VI"};
        if(numRoman[numRoman.length -1] === "7"){numRoman[numRoman.length -1] = "VII"};
        if(numRoman[numRoman.length -1] === "8"){numRoman[numRoman.length -1] = "VIII"};
        if(numRoman[numRoman.length -1] === "9"){numRoman[numRoman.length -1] = "IX"};
    }
    if(numRoman.length >= 2){
        if(numRoman[numRoman.length -2] === "0"){numRoman[numRoman.length -2] = ""};
        if(numRoman[numRoman.length -2] === "1"){numRoman[numRoman.length -2] = "X"};
        if(numRoman[numRoman.length -2] === "2"){numRoman[numRoman.length -2] = "XX"};
        if(numRoman[numRoman.length -2] === "3"){numRoman[numRoman.length -2] = "XXX"};
        if(numRoman[numRoman.length -2] === "4"){numRoman[numRoman.length -2] = "XL"};
        if(numRoman[numRoman.length -2] === "5"){numRoman[numRoman.length -2] = "L"};
        if(numRoman[numRoman.length -2] === "6"){numRoman[numRoman.length -2] = "LX"};
        if(numRoman[numRoman.length -2] === "7"){numRoman[numRoman.length -2] = "LXX"};
        if(numRoman[numRoman.length -2] === "8"){numRoman[numRoman.length -2] = "LXXX"};
        if(numRoman[numRoman.length -2] === "9"){numRoman[numRoman.length -2] = "XC"};
    }
    if(numRoman.length >= 3){
        if(numRoman[numRoman.length -3] === "0"){numRoman[numRoman.length -3] = ""};
        if(numRoman[numRoman.length -3] === "1"){numRoman[numRoman.length -3] = "C"};
        if(numRoman[numRoman.length -3] === "2"){numRoman[numRoman.length -3] = "CC"};
        if(numRoman[numRoman.length -3] === "3"){numRoman[numRoman.length -3] = "CCC"};
        if(numRoman[numRoman.length -3] === "4"){numRoman[numRoman.length -3] = "CD"};
        if(numRoman[numRoman.length -3] === "5"){numRoman[numRoman.length -3] = "D"};
        if(numRoman[numRoman.length -3] === "6"){numRoman[numRoman.length -3] = "DC"};
        if(numRoman[numRoman.length -3] === "7"){numRoman[numRoman.length -3] = "DCC"};
        if(numRoman[numRoman.length -3] === "8"){numRoman[numRoman.length -3] = "DCCC"};
        if(numRoman[numRoman.length -3] === "9"){numRoman[numRoman.length -3] = "CM"};
    }
    if(numRoman.length >= 4){
        if(numRoman[numRoman.length -4] === "1"){numRoman[numRoman.length -4] = "M"};
        if(numRoman[numRoman.length -4] === "2"){numRoman[numRoman.length -4] = "MM"};
        if(numRoman[numRoman.length -4] === "3"){numRoman[numRoman.length -4] = "MMM"};
    }
    return numRoman.join("");
   }