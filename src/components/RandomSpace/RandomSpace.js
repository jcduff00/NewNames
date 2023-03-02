import { useNavigate } from 'react-router-dom'
import './RandomSpace.css';
import '../Title/Title.css';
import data from '../../declared_data.json'

function RandomSpace() {
	const navigate = useNavigate()
  return (
		<button 
    className="RandomSpace"
    onClick={(e) => {
			const id = Math.floor(Math.random() * data.length)
			navigate(`/details/${id}`)
		}}>Random</button>
  )
}

export default RandomSpace