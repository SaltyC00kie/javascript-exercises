const repeatString = function(pString, pNumber)
{
    let outputString = "";
    if(pNumber < 0)
    {
        return "ERROR";
    }

    if(pString === "")
    {
        return "";
    }


    for(let i = 0; i < pNumber; i++)
    {
        outputString += pString;
    }
    
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
