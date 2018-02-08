import React from 'react';
import {View, Text, Image} from 'react-native';
import { Button, Header, SearchBar, Input } from 'react-native-elements';
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';


var myBackground = require('../assets/tenor.gif');

class Search extends React.Component{
    state = {
        pokeSearch: "",
        onCall: true
    }
    searchPoke = () =>{

    }
    renderBody = () =>{
      if(this.state.onCall){
          return(
              <PokeLoader />
          )
      } else {
          return (
              <SearchBody />
          )
      }
    }
    render(){
      return(
        <View style={{flex: 1}}>
        <SearchBar
          round
          onPress={this.searchPoke}
          placeholder='Search Pokemon'
          value={this.state.Pokesearch}
          onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
        />
        <Image style={styles.img} source={myBackground}/>
        </View>


      );
    }
}

const styles = {
  img: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Search;
