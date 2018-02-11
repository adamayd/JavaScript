var inputs = process.argv.slice(2);
var results = inputs.map(result => result.charAt(0))
                    .reduce((a, b) => (a + b));
console.log(`[${inputs}] becomes "${results}"`);
