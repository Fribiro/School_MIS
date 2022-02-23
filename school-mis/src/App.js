import Homepage from './components/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import Login from './components/auth/Login';

library.add( faArrowRightLong )

function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
