import React , {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
// import VegaScrollList from 'react-native-vega-scroll-list';
import Moment from 'moment';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors, fonts } from '../../styles';



export default function GroupsScreen (props) {
  const [query, setQuery] = useState('');
  const [filteredCountryList, setFilteredCountryList] = useState(countryList)
  const countryList = () => {
    console.log(props.groups)
    const dataFilter = props.groups.filter(item => {
      return item.title.indexOf(query) > -1;    
    })
    setFilteredCountryList(dataFilter)
  }
  const _renderHeader = () => {  
    return(  
      <Searchbar        
        placeholder="Type Here..."        
        lightTheme        
        round
        style={styles.searchBar} 
        onChangeText={setQuery}
        value={query}
        autoCorrect={false}             
      />    
    )
  };
  const _openArticle = (article) => {
    props.getGroupID(article.id)
    props.navigation.navigate('GroupDetail', {
      article,
    });
  };
  const renderRow = ({item}) =>(
    <TouchableOpacity
      key={item.id}
      style={styles.SectionListItemStyle}
      onPress={() => _openArticle(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <View>
            <Text style={styles.itemThreeTitle}>{item.name}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.description}
            </Text>
          </View>
          <View>
            <Text>Role: 
              <Icon name="link" size={20} color="#dd4b39" />{"  "}
              <Icon name="users" size={20} color="#f39c12" />{"  "}
              <Icon name="files-o" size={20} color="#00a65a" />
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </TouchableOpacity>
  );
  const {groups} = props
  return(
    <View style={styles.container}>
      <View style={styles.linkItem}>
    
        <FlatList   
          distanceBetweenItem = {12}
          keyExtractor={(item, index) => index.toString()}
          style={{ backgroundColor: colors.white,  }}
          data={filteredCountryList}
          renderItem={renderRow}
          ListHeaderComponent={_renderHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 5
  },
  searchBar:{
    textTransform: 'uppercase',
    marginLeft: -40
  },
  SectionHeaderStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    margin: 10,
    textAlign: 'center'
  },
  itemThreeSubContainer: {
    paddingVertical: 10,
  },
  SectionListItemStyle: {
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  itemThreeTitle: {
    paddingTop: 3,
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#000',
  },
  itemThreeSubtitle: {
    paddingTop: 3,
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeHr: {
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
});
