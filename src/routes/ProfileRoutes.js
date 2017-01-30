import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Routes from 'reactator/routes/Routes';
import BasicLayout from 'reactator/components/BasicLayout';
import ProfileComponent from '../components/profile/ProfileComponent.js';

// TODO: Move to a TodoExample

/**
 * @class
 * @memberOf module:Demo
 * @classdesc ProfileRoutes is an example of {@link module:Reactator.Routes} for the demo app's profile page.
 */
class ProfileRoutes extends Routes {
    /**
     * Provides the routes for the profile component of the demo app.
     * @return {Route} the route representing the profile component
     * @inheritdoc
     */
    getRoutes() {
        return (
            <Route key="profile" name="profile" path="profile" component={BasicLayout}>
                <IndexRoute component={ProfileComponent} />
            </Route>
        );
    }
}

module.exports = ProfileRoutes;
