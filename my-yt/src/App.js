import { Route, Switch } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/home" component={ HomeScreen } />
    </Switch>
  );
}

export default App;
