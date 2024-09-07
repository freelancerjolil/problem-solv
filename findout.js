const disha =56;
const salman = 89;

if (disha> salman) {
    console.log("Disha is greater than Salman.");
}
else {
    console.log("salman is greater than disha.");
}

function maxNum(n1, n2) {
    if (n1 > n2) {
        return n1;
    }
    else {
        return n2;
    }
}

const max1 = maxNum( 121, 85);
const max2 = maxNum (36, 99 )
const max2ultimateMax = maxNum(max1, max2)

console.log("max of two is :", max2ultimateMax);

