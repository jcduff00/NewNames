import { Link } from 'react-router-dom'

function DeclaredSpace(props) {
    const { name, image, id } = props
    return (
      <div>
        <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="450" height="250" alt="Hello" />
        </Link>
        <h1>
        <Link to={`/details/${id}`}>
            {name}
        </Link>
        </h1>
      </div>
    )
  }


export default DeclaredSpace