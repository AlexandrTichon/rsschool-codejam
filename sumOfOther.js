module.exports  = function sumOfOther(stdArray){
    let answer = [];
    for (let i = 0; i < stdArray.length; i++)
    {
        let elemSum = 0;
        for (let j = 0; j < stdArray.length; j++)
        {
            if (j === i) continue;
            else elemSum += stdArray[j];
        }
        answer[i] = elemSum;
    }
    
    return 
}