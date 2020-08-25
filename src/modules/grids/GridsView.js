import React from 'react';
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
import { rgb } from 'd3';
import Icon from 'react-native-ionicons';

export default class  GridsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterRowAll: props.rowAll,
      filterTop: props.top10
    }
  }
  // filter search
  searchFilterFunction = text => {
    if(this.props.tabIndex === 0)
    {
      const result = []
      this.props.rowAll.forEach(item => {
        const data = item.data.filter(val => {
          return val.title.indexOf(text) > -1
        })
        if(data.length > 0)
        {
          result.push({
            title : item.title,
            data: data
          })
        }
      });
      this.setState({ 
        filterRowAll: result
      }) 
    }
    else{
      this.setState({ 
        filterTop : this.props.top10.filter(item => {
          return item.title.indexOf(text) > -1;    
        })
      })
    }
  }

  _renderHeader = () => {  
    return(  
      <Searchbar        
        placeholder="Type Here..."        
        lightTheme        
        round
        style={styles.searchBar} 
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}             
      />    
    )
  };

  _openArticle = (article) => {
    this.props.getLinkID(article.id)
    this.props.navigation.navigate('Article', {
      article,
    });
  };
  renderRow = ({item}) =>(
    <TouchableOpacity
      key={item.id}
      style={styles.SectionListItemStyle}
      onPress={() => this._openArticle(item)}
    >
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <View>
            <Text style={styles.itemThreeTitle}>{item.title}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={1}>
              {item.long_url}
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>
            <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
              <View style={{flex:1, }}>
              <Text style={{color: "#ff0000" }}>s.admicro.vn/{item.alias}</Text>
              </View>
              <View style={{flex:1}}>
                <Text style={{textAlign:"right", paddingRight: 5}}>
                  {item.counting+"  "}  
                  <Icon name="stats" size = {20}/>
                </Text>
                
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.itemThreeHr} />
    </TouchableOpacity>
  );
  
  render(){

    const {tabs, tabIndex, setTabIndex} = this.props
    const {filterRowAll, filterTop} = this.state
   
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
          <View style = {{flex:1}}>
            <SectionList
              sections={filterRowAll}
              keyExtractor={(item, index) => item.title}
              renderItem={this.renderRow}
              renderSectionHeader={({ section: { title } }) => (
                <View style = {{flex: 1, backgroundColor: rgb(77,120,140)}}>
                  <Text style={styles.SectionHeaderStyle}>{title}</Text>
                </View>
              )}
              ListHeaderComponent={this._renderHeader}
              stickySectionHeadersEnabled={true}
            />
          </View>
          :
          <FlatList
            distanceBetweenItem = {12}
            keyExtractor={(item, index) => index.toString()}
            style={{ backgroundColor: colors.white, paddingHorizontal: 15 }}
            data={filterTop}
            renderItem={this.renderRow}
            ListHeaderComponent={this._renderHeader}
            stickyHeaderIndices={[0]}
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
  SectionHeaderStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: '#fff',
    margin: 10,
    textAlign: 'center'
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  SectionListItemStyle: {
    paddingLeft: 3,
    paddingRight: 3,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  itemThreeMetaContainer: {
    flexDirection: 'column',
    flex:6,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 3,
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
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
});
