import {Link} from 'react-router-dom'
import Recipes from '../Recipes/Recipes';

function Home(props) {
    return(
        <div className='ui container'>
        <h2> My recipes</h2>
            <Recipes/>
        </div>
    )
}

export default Home;