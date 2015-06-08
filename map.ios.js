'use strict';
 
var React = require('react-native');
var foundation = require('react-native-foundation');


var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var TimerMixin = require('react-timer-mixin');

var {
  StyleSheet,
  View,
  Text,
  Component,
  MapView,
  AlertIOS,
  TouchableOpacity,
  VibrationIOS,
  ScrollView
} = React;
 
var styles = StyleSheet.create({

  background: {
    flex: 1,
    justifyContent: 'center',
  },

  map: {
    flex: 1
  },

  body: {
    fontSize: 16
  },

  headline: {
    fontSize: 20
  },

  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white'
  },

});


var MapScreen = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() {
    return {
        mapRegion: {
            latitude: 40.725992,
            longitude: -73.995707,
            latitudeDelta: .01,
            longitudeDelta: .01
        },
        annotations: [{
          latitude: 40.725992,
          longitude: -73.995707,
          title: "Meetup HQ",
          subtitle: "16 people already there"
        }]
    };
  },

  componentDidMount: function() {
    // delay map display
    this.setTimeout(function() {
      this.setState({showMap: true});
    }.bind(this), 400);
  },

  renderMap: function() {
    if (this.state.showMap) {
      return (  
        <MapView region={this.state.mapRegion} style={styles.map}
                 annotations={this.state.annotations}/>
      );
    } else {
      return (
        <View style={[styles.map, {backgroundColor: '#cccccc'}]} />
      );
    }
  },


  render: function() {
    return (
      <View style={styles.container}>

         {this.renderMap()}
 
      </View>
    );
  }
});
 
module.exports = MapScreen;