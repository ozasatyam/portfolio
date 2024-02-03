import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';
import './App.css';

function MainApp() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <div
        className="elementor-element elementor-element-216b27b elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-html"
        data-id="216b27b"
        data-element_type="widget"
        data-settings='{"ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":5,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":0,"sizes":[]},"_position":"absolute","ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_duration":{"unit":"px","size":1000,"sizes":[]}}'
        data-widget_type="html.default"
      >
        <div
          className="elementor-widget-container"
        >
          <div className="circle yel" id="circle-main" />

        </div>
      </div>
      <NavBarWithRouter />
      <main className="main">
        <Switch>
          <Suspense fallback={<FallbackSpinner />}>
            <Route exact path="/" component={Home} />
            {data
              && data.sections.map((route) => {
                const SectionComponent = React.lazy(() => import('./components/' + route.component));
                return (
                  <Route
                    key={route.headerTitle}
                    path={route.path}
                    component={() => (
                      <SectionComponent header={route.headerTitle} />
                    )}
                  />
                );
              })}
          </Suspense>
        </Switch>
      </main>
    </div>
  );
}

export default MainApp;
