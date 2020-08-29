import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { fonts, colors } from '../../../styles'
import { Button } from '../../../components'
import Moment from 'moment'
const linkIcon = require('../../../../assets/images/pages/link.png')
const fileIcon = require('../../../../assets/images/pages/file.png')
const userIcon = require('../../../../assets/images/pages/user.webp')

export default function GroupDetailScreen(props) {
  const item = props.route.params.article
  const {groupDetail} = props
  return (
    <ScrollView>
      <View style={styles.itemThreeSubContainer}>
        <View style={styles.itemThreeContent}>
          <Text style={styles.itemThreeBrand}>{Moment(item.created_at).format("MMM Do YY")}{item.id}</Text>
          <View>
            <Text style={styles.itemThreeTitle}>{item.name}</Text>
            <Text style={styles.itemThreeSubtitle} numberOfLines={2}>
              {item.description}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            props.setLinkGroupChannel(groupDetail.group.links)
            props.navigation.navigate('LinksGroup')
          }}
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={linkIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>{groupDetail.countLink}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => 
          {
            props.navigation.navigate('CampaignGroup')}
          }
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={fileIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>{groupDetail.countCampaign}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.setUsersGroup(groupDetail.group.users)
            props.navigation.navigate('UsersGroup')}
          }
         
          style={styles.item}
        >
          <Image
            resizeMode="contain"
            source={userIcon}
            style={styles.itemImage}
          />
          <Text style={styles.itemText}>{groupDetail.countUser}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    justifyContent: 'space-around',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
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
