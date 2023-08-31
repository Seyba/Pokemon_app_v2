const React = require('react')

const Show = props => {
    const { name } = props.pokemon
    //* Capitalizing the first letter
    const firstLetter = name.charAt(0).toUpperCase()

    //* Extracting the last portion of the name
    const lastPart = name.slice(1)

    //* Pokemon names starting with uppercase by joining both parts
    const pokeName = firstLetter + lastPart
    return(
        <main>
            <h1>{pokeName}</h1>
        </main>
    )
}
module.exports = Show