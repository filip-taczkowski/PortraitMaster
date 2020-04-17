import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Submit from './components/pages/Submit/SubmitPage';
import Photo from './components/pages/Photo/PhotoPage';
import TermsOfUse from './components/pages/TermsOfUse/TermsOfUsePage';
import PrivacyPolicy from './components/pages/PrivacyPolicy/PrivacyPolicyPage';

class App extends React.Component {

  componentDidMount() {
    const { loadPhotos } = this.props;
    loadPhotos();
  }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/photo/:id" exact component={Photo} />
          <Route path="/terms-of-use" exact component={TermsOfUse} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/submit" exact component={Submit} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;
