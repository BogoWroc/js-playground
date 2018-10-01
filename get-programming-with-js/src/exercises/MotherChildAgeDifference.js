import ANCESTRY_FILE from './Ancestry';


export function provideAncestry() {
    return JSON.parse(ANCESTRY_FILE);
}
export function getChildrenWithMothers(ancestry) {
    const byName = groupByName(ancestry);

    return ancestry.filter(person => byName[person.mother] != null);

}

function groupByName(ancestry) {
    var byName = {};
    ancestry.forEach(function (person) {
        byName[person.name] = person;
    });

    return byName
}



