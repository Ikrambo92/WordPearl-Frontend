const PearlCheck = (pearl) => {

    let noPuncStr = pearl.replace(/[.,/#!$%^&*;:{}=\-_`~()0-9]/g, "");
    let lowerCaseStr = noPuncStr.toLowerCase();
    let noSpaceStr = lowerCaseStr.replace(/\s+/g, "");
    var count = {};
    let spacedStr = noSpaceStr.split("");
    let myOdds = [];
    spacedStr.forEach((val) => (count[val] = (count[val] || 0) + 1));
    for (spacedStr.key in count) {
        if (count[spacedStr.key] % 2 === 1) {
            myOdds.push(spacedStr.key);
        }
    }
    return myOdds;
};

export default PearlCheck;