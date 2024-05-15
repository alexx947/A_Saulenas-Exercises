function longestName(countries) {
    return countries.reduce((longest, country) => {
        return country.length > longest.length ? country : longest;
    }, "");
}

console.log(longestName(["Montenegro", "Belarus", "Democratic Republic of the Congo" , "Cuba", "United States of America",]));