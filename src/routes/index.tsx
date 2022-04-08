import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Single from '../pages/Single'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/single/:id" component={Single} />
    </Switch>
  )
}
