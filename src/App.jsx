import {Route, Router} from 'solid-app-router'
import routes from './routes'

export default function(){
  return <>
    <Router routes={routes}>
      <Route></Route>
    </Router>
  </>
}