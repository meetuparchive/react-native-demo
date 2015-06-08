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
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} = React;

// Include more React components
var Dummy = require('./dummy.ios');

// Include Meetup stuff
var gimme = require('gimme');
var foundation = require('react-native-foundation');


// Begin
var Groups = React.createClass({

  // set up state (changable data) before anything happens 
  getInitialState: function(){
    return {
      groups: []
    };
  },

  // immediately after initial rendering
  componentDidMount: function(){
    var self = this;
    var shoppingList = [
      {"gimme": "groups", "data": {"page": 32, "zip": 90210}}
    ];
    gimme(shoppingList).then(function(data){
      self.setState({
        groups: data.groups
      });
    });
  },

  // put things on the screen
  render: function() {
    var self = this;
    return (
      <View style={[foundation.stripe]}>
      <ScrollView style={foundation.list}>

        {/* this works, but for longer lists it's better use ListView */}
        {this.state.groups.map(function(g, i){
          return(
            <TouchableOpacity onPress={() => {
              self.props.navigator.push({
                component: Dummy,
                name: "Whatevs"
              });
            }}>
              <View key={i} style={foundation.listItem}>
                <View style={[foundation.alignItemsCenter, foundation.chunk]}>
                  <Image 
                    style={foundation.avatarLarge}
                    source={{uri: g.photo }}
                    resizeMode='cover'
                    />
                  <Text style={[foundation.text, foundation.textAlignCenter]}>{g.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}

      </ScrollView>
      </View>
    );
  }
});


// screen-specific styles 
var styles = StyleSheet.create({
  /*
  // example
  button: {
    backgroundColor: 'lightblue',
    flex: 1,
    padding: 16
  }
  */
});

module.exports = Groups;
