const removeFromArray = function(array, ...elemntsToRemove)
{
    return array.filter(e => !elemntsToRemove.includes(e));   
};

// Do not edit below this line
module.exports = removeFromArray;
