
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import asyncComponent from '../lib/asyncComponent';
import home from "../views/home";
import LayoutHoc from "../lib/layout_hoc";


const NotFound = function(){
  return <div>404</div>
};
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
const routes = [
  {
    path: "/",
    component:home,
    exact: true,
  },
];
export default () => {
  const RouteComponent = (props)=>(<Switch>
    {routes.map((route, i) => (
      <Route key={`page_route${i}`} {...route}/>
    ))}
   <Route component={NotFound} />
 </Switch>);
 const LayoutPage = LayoutHoc(RouteComponent);
  return <Router>
    <Route
      path="/"
      render={(props) => (
        <React.Fragment>
          <LayoutPage {...props}/>
        </React.Fragment>
      )}
    />
  </Router>
};
