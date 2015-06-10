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
  ListView,
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
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // you can get fancier if you want

var GroupsList = React.createClass({

  // set up state (changable data) before anything happens 
  getInitialState: function(){
    return {
      // set up an empty data source for the list
      dataSource: ds.cloneWithRows([])
    };
  },

  // immediately after initial rendering
  componentDidMount: function(){
    var self = this;
    var shoppingList = [
      {"gimme": "groups", "data": {"page": 32, "zip": 15205}}
    ];
    gimme.apiKey = '715d68731b3913292f447f4c45547'; // change to your api key otherwise we'll all get throttled
    gimme.get(shoppingList).then(function(data){
      self.setState({
        dataSource: ds.cloneWithRows( data.groups ) // "row-ify" the data
      });
    });
  },

  // put things on the screen
  render: function() {
    return (
      <View style={foundation.container}>
        <ListView
            dataSource={this.state.dataSource} // "row-ified" data
            renderRow={this._renderRow} // a function that renders each row
            style={foundation.list}
            />

      </View>
    );
  },

  // define how to render each row
  _renderRow: function(rowData, sectionID, rowID){
      return (
        <TouchableOpacity onPress={() => {
            this.props.navigator.push({
              component: Dummy,
              name: "Whatevs"
            });
          }}>
          <View style={foundation.listItem}>
            
            {/* avatar style */}
            <View style={[foundation.alignItemsCenter, foundation.chunk]}>
              
              <View style={foundation.pseudoLine}>
                <Image 
                  style={foundation.avatarLarge}
                  source={{uri: rowData.photo }}
                  resizeMode='cover'
                  />
              </View>
              <Text style={[foundation.text, foundation.textAlignCenter]}>{rowData.name}</Text>
            </View>

          {/* card style 
            <Image 
              style={{height: 200, flex: 1}}
              source={{uri: rowData.photo }}
              resizeMode='cover'
              >
              <View style={foundation.imageBackdrop}>
                <Text style={[foundation.text, foundation.textHeadline, foundation.textPrimaryInverted, foundation.textAlignCenter]}>{rowData.name}</Text>
              </View>
            </Image>
          */}

           
          </View>
        </TouchableOpacity>
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

module.exports = GroupsList;
