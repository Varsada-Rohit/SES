import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../Config/Colors';

const Card = ({title, subTitle, image,km}) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode={'cover'} />
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={{color: 'grey'}}>/month</Text>
          </View>
        </View>
        <View style={{justifyContent:"center",alignSelf:"center",flex:1,paddingRight:10}}>
          <Entypo name="location-pin" size={16} color={Colors.primary} style={{textAlign:"right"}} />
  <Text style={{textAlign:"right",fontSize:10,color:"grey"}}>{km}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 130,
  },
  detailContainer: {
    padding: 10,
  },
  title: {
    marginBottom: 5,
    fontWeight: '700',
  },
  subTitle: {
    color: Colors.secondary,
  },
});
