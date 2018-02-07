import React from 'react';
import {View, Text} from 'react-native';
import { Button, Header, SearchBar } from 'react-native-elements';

class Search extends React.Component{

    render(){
      return(
        <View style={{flex: 1}}>
        <SearchBar
      
          placeholder='Type Here...' />
        </View>


      );
    }
}

export default Search;
