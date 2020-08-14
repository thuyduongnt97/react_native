import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated
} from 'react-native'

import { fonts, colors } from '../../../styles'
import { Button } from '../../../components'
import VegaScrollList from 'react-native-vega-scroll-list';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default function UsersGroupScreen(props) {
  const {usersGroup} = props
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      bounces={false}
      data={usersGroup}
      renderItem={(data) => {
        let item = renderItem(data);
        const { index } = data;
        return <VegaScrollItem {...{ index, y, item, distanceBetweenItem }} />;
      }}
      {...{ onScroll }}
      {...otherProps}
    />
  );
}
