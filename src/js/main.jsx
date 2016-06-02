import ReactDOM from 'react-dom';
import 'imports?jQuery=jquery!bootstrap-sass';
import 'scss/style.scss';
import App from 'components/app';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

function main() {
   let routes = (
      <Router history={browserHistory}>
         <Route path="/" component={App}>
            <IndexRoute/>
            <Route path="/projects"/>
            <Route path="/blog"/>
            <Route path="/about"/>
         </Route>
      </Router>
   )
   ReactDOM.render(routes, document.getElementById('app-container'));
}

main();
