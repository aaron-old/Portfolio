import React from 'react';
import {Route} from 'react-router-dom'
import routes from './Routes';


const PageRouter = () => {

    return (
        <main>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </main>
    )
};

export default PageRouter;