const React = require('react')

const Index = (props) => {
    const { pokemon } = props
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        textAlign: 'center'
    }

    return(
        <main style={myStyle}>
            <h1>See All The Pokemon!!</h1>
            <ul>
                {
                    pokemon.map((poke, i) => {
                        const {name} = poke
                        //* Capitalizing the first letter
                        const firstLetter = name.charAt(0).toUpperCase()

                        //* Extracting the last portion of the name
                        const lastPart = name.slice(1)

                        //* Pokemon names starting with uppercase by joining both parts
                        const pokeName = firstLetter + lastPart
                        
                        return(<li>
                            <a href={`/pokemon/${i}`}>{pokeName}</a>
                        </li>)
                    })
                }
            </ul>
        </main>
    )
}

module.exports = Index