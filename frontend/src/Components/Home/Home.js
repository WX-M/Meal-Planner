import {Link} from 'react-router-dom'
import Ingredients from '../Recipes/Ingredients';
import Recipes from '../Recipes/Recipes';

function Home(props) {
    return(


        <div className="ui container grid">
    <div className='ui row'>
    <div className='column eight wide'>
    <h2> My recipes</h2>
    <Recipes/>
      </div>

      <div className='column eight wide'>
      <Ingredients/>
      </div>
      </div>
    </div>


    )
}

export default Home;