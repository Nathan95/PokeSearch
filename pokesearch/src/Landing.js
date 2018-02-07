import React from 'react';
import {View, Text, Button, Image} from 'react-native';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component{
  render() {
    return(
        <View>
          <Image source={myBackground}/>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to Pokesearch</Text>
            <Button title='Start Searching'
              block={true}
              style={styles.buttonStyle}
              onPress={()=>this.props.switchScreen("search")}
            >
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </View>
    )
  }
}
const styles = {
    viewStyle: {
      position: 'absolute',
      top: 300,
      left: 60,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleStyle: {
      fontSize: 25,
      color: 'blue'
    },
    buttonStyle: {
      margin: 10
    },
    buttonText: {
      color: 'white'
    }
}
export default Landing;
