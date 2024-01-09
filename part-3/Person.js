// Referred to solution for this one. Was a tad bit confusing working with React.

/*
What I learned:
    Not everything has to be placed in the return statement. Logic can be done outside of return statement in components. 

    Note: You can SLICE a string but, you CAN'T splice a string that's an array only method.
*/
const Person = ({age, hobbies, name}) => {
    const MAX_NAME_LENGTH_TO_SHOW = 6;
    const voteText = age >= 18 ? "You can vote" : "You're not old enough to vote yet";
    
    const hobbiesLIs = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p> Learn some information about this person:</p>
            <ul>
                <li>
                    Name: {name.slice(0, MAX_NAME_LENGTH_TO_SHOW)}
                </li>
                <li>
                    Age: {age}
                </li>
                <ul>
                    Hobbies:
                    {hobbiesLIs}
                </ul>
            </ul>
            <h3>{voteText}</h3>
        </div>
    )
};