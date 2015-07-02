/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


// Include base React components
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Navigator,
  Text,
  View
} = React;

// Include more React components
var NavigationBar = require('react-native-navbar');

// Include Meetup stuff
var foundation = require('react-native-foundation');


var RNdemo = React.createClass({

  renderScene: function(route, navigator) {

    var Component = route.component;
    var navBar = (
      <NavigationBar 
        title={route.name} 
        navigator={navigator}
        route={route}
        {...route.props} 
        />
    );

    return (
      <View style={foundation.container}>
        {navBar}
        <Component 
          navigator={navigator} 
          route={route} 
          />

      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        sceneStyle={foundation.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight,
          gestures: Navigator.SceneConfigs.FloatFromRight.gestures
        })}
        initialRoute={{
          component: require('./demo.ios'), // change this to 'groups.ios' or 'demo.ios' to try out those screens
          name: 'Hello'
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  navigator: {
    backgroundColor: 'white',
  }
});


AppRegistry.registerComponent('rndemo', () => RNdemo);
