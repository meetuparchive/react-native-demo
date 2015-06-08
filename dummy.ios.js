'use strict';
 
var React = require('react-native');
var foundation = require('react-native-foundation');

var {
  StyleSheet,
  View,
  Text,
  Component,
  Image,
  TouchableOpacity,
} = React;
 

var styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
  },

});


var Dummy = React.createClass({

  getInitialState: function() {
    return {

    };
  },

  componentDidMount: function() {

  },

  render: function() {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <View style={[foundation.stripe, foundation.bounds]}>
          <View style={foundation.chunk}>
            <Text style={[foundation.textAlignCenter, {fontSize: 20, color: this.props.route.color}]}>
              This screen hasn't been built yet.
            </Text>
          </View>
          <View style={foundation.chunk}>
            <Image 
              style={{flex: 1, height: 254}}
              resizeMode="contain"
              source={{uri: 'http://cdn.meme.am/instances/400x/60359423.jpg'}}
              />
          </View>
        </View>
      </View>
    );
  }
});
 
module.exports = Dummy;