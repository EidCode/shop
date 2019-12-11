import React, { Component } from "react";
import Homepage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.component";
import { connect } from "react-redux";
import Auth from "./pages/auth/Auth.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends Component {
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/signIn"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Auth />
            }
          />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps, { setCurrentUser })(App);
