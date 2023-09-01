const React = require('react')

const Show = props => {
    //* Styling
    const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        textAlign: 'center',
        paddingBottom: '18px',
        paddingTop: '10px'
    }
    const btn = {
        fontSize: '23px',
        color: '#ffffff',
        textDecoration: 'none',
        border: '1px solid #ffffff',
        borderRadius: '3px',
        paddingRight: '18px',
        paddingLeft: '18px',
    }
    const imgStyle={
        marginBottom: '18px'
    }
    const { name, img } = props.pokemon
    //* Capitalizing the first letter
    const firstLetter = name.charAt(0).toUpperCase()

    //* Extracting the last portion of the name
    const lastPart = name.slice(1)

    //* Pokemon names starting with uppercase by joining both parts
    const pokeName = firstLetter + lastPart

    //* jpg extension variable
    const imgExtension = '.jpg'
    //* full image created
    const url = img.concat('', imgExtension)

    return(
        <main style={myStyle}>
            <h1>"Gotta Catch 'Em All"</h1>
            <h2>{pokeName}</h2>
            <img style={imgStyle} src={url}/><br/>
            <a style={btn} href="/pokemon">Back</a>
        </main>
    )
}
module.exports = Show