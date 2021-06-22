import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Wrapper from './Wrapper/Wrapper';
import Home from '../containers/Home/Home';
import Stock from '../containers/Stock/Stock';
import Contactanos from '../containers/Contactanos/Contactanos';
import Galeria from '../containers/Galeria/Galeria';
import Nosotros from '../containers/Nosotros/Nosotros';
import NotFound from '../containers/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
          <BrowserRouter>
            <Wrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/nosotros" component={Nosotros} />
                <Route exact path="/stock" component={Stock} />
                <Route exact path="/contactanos" component={Contactanos} />
                <Route exact path="/galeria" component={Galeria} />
                {/* <Route exact path="/partido/jugar-partido" component={JugarPartido} /> */}
                <Route component={NotFound} />
              </Switch>
            </Wrapper>
          </BrowserRouter>
      </>
    );
  }
}

export default App;
