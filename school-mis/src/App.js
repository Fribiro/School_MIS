import Homepage from './components/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

library.add( faArrowRightLong )

function App() {
  return (
    <div className="App">
     <Homepage/>
    </div>
  );
}

export default App;
