import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  TouchableHighlight,
} from 'react-native';
// import firestore from '@react-native-firebase/firestore';

import Card from '../Components/Card';
import Colors from '../Config/Colors';
import AppTouchableIcon from '../Components/AppTouchableIcon';
import {RefreshControl} from 'react-native';

function ListingsScreen({navigation}) {
  // const [products, setproducts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const products =[
    {
      Title : "Mess",
      Price : "3000",
      image : require('../assets/Mess/1.jpg'),
      km:2
    },
    {
      Title : "Mess",
      Price : "3500",
      image : require('../assets/Mess/2.jpg'),
      km:5,
    },
    {
      Title : "Mess",
      Price : "3800",
      image : require('../assets/Mess/3.jpg'),
      km :6,
    },
    {
      Title : "Mess",
      Price : "3500",
      image : require('../assets/Mess/4.jpg'),
      km:8,
    },
    {
      Title : "Mess",
      Price : "4200",
      image : require('../assets/Mess/5.jpg'),
      km:7
    },
    {
      Title : "Mess",
      Price : "4000",
      image : require('../assets/Mess/6.jpg'),
      km:9
    },
    {
      Title : "Mess",
      Price : "3000",
      image : require('../assets/Mess/7.jpg'),
      km:9
    },
    {
      Title : "Mess",
      Price : "2000",
      image : require('../assets/Mess/8.jpg'),
      km:9
    },
  ]
  // const ref = firestore().collection('Products');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // setRefresh(true);
    // let allProducts = [];
    // await ref
    //   .limit(4)
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(product => {
    //       let obj = {
    //         key: product.id,
    //         Title: product.data().Title,
    //         Price: product.data().Price,
    //         image: {uri: product.data().images[0]},
    //       };
    //       allProducts.push(obj);
    //       global.lastDoc = product;
    //     });

    //     setproducts(allProducts);
    //     setRefresh(false);
    //   });
  };

  onLoadMore = async () => {
    // console.log(global.lastDoc);
    // let allProducts = [];
    // const moreproducts = await ref
    //   .startAfter(lastDoc)
    //   .limit(4)
    //   .get()
    //   .then(snapshot => {
    //     snapshot.forEach(product => {
    //       let obj = {
    //         key: product.id,
    //         Title: product.data().Title,
    //         Price: product.data().Price,
    //         image: {uri: product.data().images[0]},
    //       };
    //       allProducts.push(obj);
    //       lastDoc = product;
    //     });
    //     setproducts(products.concat(allProducts));
    //   });
  };

  onProduct = item => {
    navigation.navigate('ListingDetail', {item: item});
  };

  return (
    <View style={styles.screen}>
      <FlatList
        refreshing={true}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => getProducts()}
          />
        }
        data={products}
        numColumns={2}
        ListFooterComponent={
          <AppTouchableIcon
            underlayColor={'green'}
            name="download"
            size={25}
            text={'Load More'}
            color={Colors.primary}
            style={styles.footercomponent}
            onPress={onLoadMore}
          />
        }
        // keyExtractor={listing => listing.}
        renderItem={({item}) => (
          <TouchableHighlight
            style={{flex: 1, flexDirection: 'row', margin: 10}}
            onPress={() => {
              onProduct(item);
            }}>
            <Card
              title={item.Title}
              subTitle={'₹' + item.Price}
              image={item.image}
              km={item.km+"km"}
            />
          </TouchableHighlight>
        )}
      />
    </View>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.light,
  },
  footercomponent: {
    backgroundColor: Colors.secondary,
    alignSelf: 'center',
    width: 150,
  },
});
