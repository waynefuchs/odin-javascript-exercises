const findTheOldest = (people) =>
    people.reduce((oldestPerson, currentPerson) => 
        getAge(oldestPerson) < getAge(currentPerson) 
            ? currentPerson 
            : oldestPerson);

function getAge(person)
{
    if(typeof(person) !== "object") return 0;
    return (
            ('yearOfDeath' in person) 
                ? person.yearOfDeath 
                : (new Date()).getFullYear()
        ) - person.yearOfBirth;
}

        
// Do not edit below this line
module.exports = findTheOldest;
