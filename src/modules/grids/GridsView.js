import React , {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SectionList,
} from 'react-native';
import { colors, fonts } from '../../styles';
import { RadioGroup } from '../../components';
import { Searchbar } from 'react-native-paper';

export default class  GridsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,      
      data: props.tabIndex === 0 ? props.rowAll : props.top10,      
      error: null,    
    };
  }
  fetchData = newData => {
      this.setState({
        data: newData
      });
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.tabIndex !== prevProps.tabIndex) {
      const newData = this.props.tabIndex === 0 ?  this.props.rowAll : this.props.top10
      this.fetchData(newData);
    }
  }
  searchFilterFunction = text => {
    const newData = this.props.tabIndex === 0 ?  
    (this.props.rowAll.filter(item => {
       return item.title.indexOf(text) > -1;    
    })) :  (this.props.top10.filter(item => {
      return item.title.indexOf(text) > -1;    
   }))
    this.setState({ data: newData });  
  };

  _renderHeader = () => {    
    return (      
      <Searchbar        
        placeholder="Type Here..."        
        lightTheme        
        round
        style={styles.searchBar} 
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    );  
  };

  _getRenderItemFunction = () => this.renderRow


  _openArticle = (article) => {
    this.props.getLinkID(article.id)
    this.props.navigation.navigate('Article', {
      article,
    });
  };
  renderRow = ({item}) =>(
    <TouchableOpacity
      key={item.id}
      style={styles.itemThreeContainer}
      onPress={() => this._openArticle(item)}
    >
    
      <View style={styles.itemThreeSubContainer}>
        <View>
          <Text style={styles.itemThreeTitle}>{item.title}</Text>
          <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <View style={styles.itemThreeMetaContainer}>
          <Text style={styles.itemThreePrice}>{item.counting}</Text>
        </View>
      </View>

      <View style={styles.itemThreeHr} />
    </TouchableOpacity>
  );
  
  render(){
    const {rowAll, top10, tabs, tabIndex, setTabIndex} = this.props
    
    return (
      <View style={styles.container}>
        <View style={styles.radioSelectLink}>
          <RadioGroup
            selectedIndex={tabIndex}
            items={tabs}
            onChange={setTabIndex}
            underline
          />
        </View>
        <View style={styles.linkItem}>
        {tabIndex === 0 ? 
          <SectionList
            sections={this.state.data}
            keyExtractor={(item, index) => item + index}
            renderItem={this._getRenderItemFunction()}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
            ListHeaderComponent={this._renderHeader}
            stickyHeaderIndices={[0]}
          />:
          <FlatList
            distanceBetweenItem = {12}
            keyExtractor={(item, index) => index.toString()}
            style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
            data={this.state.data}
            renderItem={this._getRenderItemFunction()}
            ListHeaderComponent={this._renderHeader}
            stickyHeaderIndices={[0]}
            numColumns={2}
          />
        }
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  radioSelectLink:{
    flex:1,
    backgroundColor: colors.bluish
  },
  linkItem:{
    flex:14,

  },
  searchBar:{
    textTransform: 'uppercase',
    marginLeft: -40
  },
  header: {
    paddingLeft: 20,
    fontSize: 32,
    // backgroundColor: "#fff"
  },
  tabsContainer: {
    alignSelf: 'stretch',
    marginTop: 30,
  },
  itemOneContainer: {
    flex: 1,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneImageContainer: {
    borderRadius: 3,
    overflow: 'hidden',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
  itemOneTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneSubTitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 13,
    color: '#B2B2B2',
    marginVertical: 3,
  },
  itemOnePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
  },
  itemOneRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  itemOneContent: {
    marginTop: 5,
    marginBottom: 10,
  },
  itemTwoContainer: {
    paddingBottom: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    // flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
