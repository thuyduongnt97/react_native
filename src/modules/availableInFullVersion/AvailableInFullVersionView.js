import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Linking,
  Dimensions ,
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { fonts, colors } from '../../styles';
import { Button } from '../../components';
import Moment from 'moment';

export default function AvailableInFullVersionScreen(props) {
  const {data_referer, data_location, data_os, data_browser, data_click, data_series_total_click, list_date_categories, link_history} = props
  const item = props.route.params.article
  const data = {
    labels: Object.values(list_date_categories),
    datasets: [
      {
        data: Object.values(data_series_total_click)
      }
    ]
  };
  
  return (
    <ImageBackground
      source={require('../../../assets/images/background.png')}
      style={styles.itemThreeContent}
    >
    {console.log(Object.values(list_date_categories))}
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>{Moment(item.created_at).format("MMM Do YY")}</Text>
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
      <View>
        <BarChart
          // style={graphStyle}
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
    </ImageBackground>
  );
}


const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: 'space-around',
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
