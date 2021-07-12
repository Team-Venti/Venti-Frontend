import React from 'react';
import MainPage from './pages/MainPage/index';
import EventPage from './pages/EventPage/index';
import EventDetailPage from './pages/EventDetailPage/index';
import BrandPage from './pages/BrandPage/index';
import BrandDetailPage from './pages/BrandDetailPage/index';
import MyVentiPage from './pages/MyVentiPage/index';
import SignUpPage from './pages/SignUpPage/index';
import LogInPage from './pages/LogInPage/index';
import MyPage from './pages/MyPage/index';
import NoticePage from './pages/NoticePage/index';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/event-detail:event_id" component={EventDetailPage} />
      <Route exact path="/brand" component={BrandPage} />
      <Route exact path="/brand-detail:brand_id" component={BrandDetailPage} />
      <Route exact path="/my-venti" component={MyVentiPage} />
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/log-in" component={LogInPage} />
      <Route exact path="/my" component={MyPage} />
      <Route exact path="/notice" component={NoticePage} />
    </Switch>
  );
}

export default App;
