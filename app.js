// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { sum };

const fromDollarToYen = (USD) => {
    const USDinEUR = USD / 1.2 ;
    return(USDinEUR * 127.9);
};

const fromEuroToDollar = (EUR) => {
    return(EUR * 1.2);
};

const fromYenToPound = (JPY) => {
    const YENinEUR = JPY / 127.9 ;
    return(YENinEUR * 0.8);
};

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound}
