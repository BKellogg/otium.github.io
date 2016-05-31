import Header from 'components/header';
import {Grid} from 'react-bootstrap';
export default class App extends React.Component {

   render() {
      return (
         <div>
            <Header/>
            <Grid fluid>{this.props.children}</Grid>
         </div>
      );
   }
}
