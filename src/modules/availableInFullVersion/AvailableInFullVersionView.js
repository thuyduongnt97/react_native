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
          <Text style={styles.itemThreeBrand}>{Moment(item.created_at).format("MMM Do YY")}{item.id}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.title}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={2}>
              {item.long_url}
            </Text>
          </View>
          <View style={styles.itemThreeMetaContainer}>
            <View
              style={[
                styles.badge,
              ]}
            >
              <Text
                style={{ fontSize: 10, color: colors.white }}
                styleName="bright"
              >
              </Text>
            </View>
           
            <Text style={styles.itemThreePrice}>{item.counting}</Text>
          </View>
        </View>
      </View>
      <View style={styles.container_chart}>
        <BarChart
          data={data}
          width={screenWidth}
          height={320}
          yAxisLabel=""
          chartConfig={chartConfig}
          verticalLabelRotation={35}//độ nghiêng của label
        />
      </View>
      <View style={styles.container_chart}>
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
  container_chart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  nerdImage: {
    width: 80,
    height: 80,
  },
  availableText: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginVertical: 3,
  },
  textContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  button: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    padding: 10
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
 
  
  itemThreeContent: {
    flex: 1,
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
 
 
});
