function solution(n)
{
    if(n < 5) return 0;

    const bin = parseInt(n,10).toString(2);
    const binArr = bin.split('');
    let gapLength = 0
    let resArr = [0];
    for (let index = 0; index < binArr.length; index++) {
        const element = Number(binArr[index]);
        console.log("element", element)
        if(element === 0) {
            gapLength += 1;
        } else if(gapLength !== 0) {
            resArr = [...resArr, gapLength]
            gapLength = 0;
        } else {
            gapLength = 0;
        }
    }
    return Math.max(...resArr)
}

console.log(solution(1041))