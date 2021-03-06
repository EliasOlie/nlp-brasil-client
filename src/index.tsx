import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, RouteComponentProps} from 'react-router-dom';
import routes from './routes/routes';
import GlobalStyle from './components/styles/GlobalStyle'
import NotFoundPage from './components/pages/NotFoundPage'

ReactDOM.render(
  <React.StrictMode>
  <>
    <GlobalStyle/>
    <BrowserRouter>
      
      <Switch>
        {routes.map(((route, index) => {
          return(
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) =>(
                <route.component
                name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            
            />
          );
        }))}
      <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  </>
</React.StrictMode>,
document.getElementById('root')
);