import { Link } from 'react-router-dom'
import './DeclaredSpace.css'

function DeclaredSpace(props) {
    const { name, image, party, notable_for, id } = props
    return (
      <div className="DeclaredSpace">
        <Link 
          className="DeclaredSpace-title"
          to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} className="DeclaredSpace-image" width="450" height="250" alt="Hello" />
        </Link>
        <h1>
        <Link to={`/details/${id}`}>
            {name}
        </Link>
          <div className="DeclaredSpace-party">
				    <div >{party}</div>
			    </div>
        </h1>
      </div>
    )
  }


export default DeclaredSpace