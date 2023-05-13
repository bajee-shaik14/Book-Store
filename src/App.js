import {Switch, Route as Navigator, Redirect} from 'react-router-dom'

import Home from './Components/Home'
import Books from './Components/Books'
import './App.css'
import NotFound from './Components/NotFound'
import FormField from './Components/FormField'

const App = () => (
  <Switch>
    <Navigator exact path="/" component={Home} />
    <Navigator exact path="/formfield" component={FormField} />
    <Navigator exact path="/books/:id" component={Books} />
    <Navigator path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App