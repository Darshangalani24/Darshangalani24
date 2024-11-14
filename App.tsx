import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
// import {user} from './app.const';
// import colors from './src/theme/colors';
import colors from './src/theme/colors';
import {ad} from './app.const';

const ACEuser = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [data, setData] = useState([
    {
      id: 1,
      title: 'House',
    },
    {
      id: 2,
      title: 'Apartment',
    },
    {
      id: 3,
      title: 'Hotel',
    },
    {
      id: 4,
      title: 'Villa',
    },
    {
      id: 5,
      title: 'Cottage',
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginHorizontal: 30,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 12.83, color: '#838383'}}>Location</Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{fontSize: 21.38, fontWeight: '300', color: '#000000'}}>
                Jakarta
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('./src/assets/image/arrowdown.png')}
                  style={{height: 32, width: 32}}></Image>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('./src/assets/image/notification.png')}
              style={{height: 30, width: 30}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10, marginHorizontal: 30}}>
          <View
            style={{
              flexDirection: 'row',
              height: 52,
              width: 300,
              borderWidth: 1,
              borderColor: '#838383',
              borderRadius: 10,
              backgroundColor: '#F7F7F7',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Image
                  source={require('./src/assets/image/Vector.png')}
                  style={{height: 18, width: 18, marginLeft: 15}}
                />
              </TouchableOpacity>
              <TextInput
                placeholder="Search address, or near you "
                style={{color: '#858585', fontSize: 16, marginLeft: 20}}
                // onChangeText={res => setvar(res)}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                let tempdata = [...data];
                tempdata.push({
                  id: data.length + 1,
                  title: 'New House',
                });
                setData([...tempdata]);
              }}>
              <Image
                source={require('./src/assets/image/Filter.png')}
                style={{height: 50, width: 50, marginLeft: 50}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 10, marginLeft: 20}}>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10,
                    margin: 10,
                    backgroundColor:
                      index == selectedTab ? colors.blue : colors.buttonback,
                    // width: 100,
                    // height: 50,
                  }}
                  onPress={() => setSelectedTab(index)}>
                  <Text
                    style={{
                      fontSize: 18,
                      padding: 10,

                      color:
                        index == selectedTab ? colors.white : colors.textco,
                    }}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000000', fontSize: 22, fontWeight: '400'}}>
            Near from you
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#858585'}}>See more</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              marginHorizontal: 20,
              alignItems: 'center',
            }}>
            <ScrollView horizontal={true}>
              <ImageBackground
                source={require('./src/assets/image/villa1.png')}
                style={styles.villa1}>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#808080',
                      width: 80,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 16,
                      marginTop: 20,
                      marginLeft: '55%',
                    }}>
                    <Image
                      source={require('./src/assets/image/location.png')}
                      style={{height: 10, width: 8}}
                    />
                    <Text
                      style={{fontSize: 12, color: '#ffffff', marginLeft: 8}}>
                      1.8 km
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 160,
                    marginLeft: 30,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: '400', color: '#ffffff'}}>
                    Dreamsville House
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '200', color: '#ffffff'}}>
                    Jl. Sultan Iskandar Muda
                  </Text>
                </View>
              </ImageBackground>
              <ImageBackground
                source={require('./src/assets/image/villa2.png')}
                style={styles.villa2}>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      backgroundColor: '#808080',
                      width: 80,
                      height: 30,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 16,
                      marginTop: 20,
                      marginLeft: '55%',
                    }}>
                    <Image
                      source={require('./src/assets/image/location.png')}
                      style={{height: 10, width: 8}}
                    />
                    <Text
                      style={{fontSize: 12, color: '#ffffff', marginLeft: 8}}>
                      3.0 km
                    </Text>
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'column',
                    marginTop: 160,
                    marginLeft: 30,
                  }}>
                  <Text
                    style={{fontSize: 18, fontWeight: '400', color: '#ffffff'}}>
                    Ascot House
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '200', color: '#ffffff'}}>
                    Jl. Cilandak Tengah
                  </Text>
                </View>
              </ImageBackground>
            </ScrollView>
          </View>
        </View>
        <View
          style={{
            marginTop: 5,
            marginHorizontal: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 22, fontWeight: '400', color: '#000000'}}>
            Best for you
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#858585'}}>See more</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10, marginLeft: 20, flex: 1}}>
          <FlatList
            data={ad}
            renderItem={({item, index}) => {
              return (
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <Image source={item.image} style={styles.adimage} />
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      marginTop: 10,
                      marginLeft: 10,
                    }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 22,
                          fontWeight: '400',
                          color: '#000000',
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{fontSize: 16, color: '#0A8ED9', marginTop: 10}}>
                      {item.rent}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 10,
                      }}>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Image source={item.image2} style={styles.icon} />
                          <Text
                            style={{
                              color: '#858585',
                              fontSize: 16,
                              marginLeft: 5,
                            }}>
                            {item.text}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginLeft: 20,
                          }}>
                          <Image source={item.image3} style={styles.icon} />
                          <Text
                            style={{
                              color: '#858585',
                              fontSize: 16,
                              marginLeft: 5,
                            }}>
                            {item.text2}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  villa1: {
    height: 290,
    width: 237,
  },
  villa2: {
    height: 260,
    width: 237,
  },
  adimage: {
    height: 170,
    width: 120,
  },
  icon: {
    height: 25,
    width: 25,
  },
});

export default ACEuser;
