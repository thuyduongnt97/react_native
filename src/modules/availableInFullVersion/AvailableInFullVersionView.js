import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
  Dimensions ,
  ScrollView
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import Moment from 'moment';
import Icon from 'react-native-ionicons';

import {
  BarChart,
  PieChart
} from "react-native-chart-kit";

export default function AvailableInFullVersionScreen(props) {
  const screenWidth = Dimensions.get("window").width - 10;
  const {categories, data_series_total_click, data_referer, data_location, data_os, data_browser} = props
  const item = props.route.params.article
  const data = {
    labels: categories,
    datasets: [
      {
        data: Object.values(data_series_total_click),
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ]
  };
  return (
    <ScrollView>
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

      <View style={styles.container_Barchart}>
        <Text></Text>
        <BarChart
          data={data}
          width={screenWidth}
          height={320}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={35}//độ nghiêng của label
        />
      </View>
      <View >
        <View >
          <Text style={styles.titleChart}>REFERRERS</Text>
          <View style={styles.container_chart }>
            <PieChart
              data={data_referer}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
          
        </View>
        <View >
          <Text style={styles.titleChart}>LOCATIONS</Text>
          <View style={styles.container_chart}>
            <PieChart
              data={data_location}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View> 
        </View>
        <View>
          <Text style={styles.titleChart}>DEVICES</Text>
          <View style={styles.container_chart}>
            <PieChart
              data={data_os}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>
        <View>
          <Text style={styles.titleChart}>BROWSERS</Text>
          <View style={styles.container_chart}>
            <PieChart
              data={data_browser}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          </View>
        </View>
      </View>
      
    </ScrollView>  
);
}
const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 1.5,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 1,
  color: (opacity = 6) => `rgba(0, 255, 0, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.2,
  useShadowColorFromDataset: false, // optional
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'space-around',
    padding: 5,
  },
  container_Barchart:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  container_chart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    padding: 5,
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
  titleChart:{
    textAlign: "left",
    fontWeight: 'bold',
    paddingLeft: 10
  }
});
