import logo from './logo.svg'

function DeclaredSpace(props) {
    const { name, image, party } = props
    return (
      <div>
        <img src={`${process.env.PUBLIC_URL}/images/${image}`}    
          width="450"
          height="250"
          alt="Marianne Williamson"
        />
        <h1>{name}</h1>
        <div>{party}</div>
      </div>
    )
  }


export default DeclaredSpace