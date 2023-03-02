import { Link } from 'react-router-dom'
import './PotentialSpace.css'

function PotentialSpace(props) {
    const { name, image, party, id } = props
    return (
      <div className="PotentialSpace">
        <Link 
          className="PotentialSpace-title"
          to={`/potential/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} className="PotentialSpace-image" width="450" height="250" alt="Hello" />
        </Link>
        <h1>
        <Link to={`/potential/details/${id}`}>
            {name}
        </Link>
          <div className="PotentialSpace-party">
				    <div >{party}</div>
			    </div>
        </h1>
      </div>
    )
  }

  export default PotentialSpace