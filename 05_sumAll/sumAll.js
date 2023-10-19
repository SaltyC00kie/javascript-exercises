const sumAll = function(pStart, pEnd)
{
    if((typeof pStart !== "number"  || typeof pEnd !== "number" ) || (pStart < 0 || pEnd < 0))
    {
        return "ERROR"
    }

    let sum = 0; 
    let begin; 
    let end; 

    if(pStart > pEnd)
    {
        begin = pEnd; 
        end = pStart;
    }
    else
    {
        begin = pStart; 
        end = pEnd;
    }

    for(let i = begin; i <= end; i++)
    {
        sum+=i; 
    }
return sum;
};
console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;
