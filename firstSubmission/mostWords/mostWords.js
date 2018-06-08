let tally = function(str){
    let mostWords = {};
    let highestValue = 0;
    let highestKey = '';
    let arr = str.split(' ');
    for(let i = 0; i < arr.length; i++){
        if(mostWords[i] === undefined){
            mostWords[i] = 0;
        }
        mostWords[i]++
        if(mostWords[i] < highestValue){
            let highestKey = arr[i];
        }
        
    }
    return highestKey;
}