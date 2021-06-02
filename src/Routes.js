import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Intro from "./Pages/UserPage/Intro/Intro";
import UserInfo from "./Pages/UserPage/UserInfo/UserInfo";
import Quiz from "./Pages/UserPage/Quiz/Quiz";
const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* 무조건 main화면을 /로 설정하게 하기 */}
        <Route exact path="/" component={Intro} />
        <Route exact path="/userInfo" component={UserInfo} />
        <Route exact path="/quiz" component={Quiz} />
        {/* 잘못된 경로가 있을 때 redirect */}
        <Route.Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
