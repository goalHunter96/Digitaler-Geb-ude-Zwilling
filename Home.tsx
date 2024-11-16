import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, useWindowDimensions, ImageBackground, Dimensions, FlatList, Animated, findNodeHandle } from 'react-native'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { TabView, SceneMap, TabBar, Route, SceneRendererProps } from 'react-native-tab-view';
import { convertToObject } from "typescript";
import { useFonts } from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';
import { wp, hp } from "../helpers/data";
import { unstable_batchedUpdates } from "react-native";
import malist from "../maList";

import { StatusBar } from "expo-status-bar";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";
import { measure } from "react-native-reanimated";
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Home = ({ navigation }) => {
    /*const navigation = useNavigation();*/
    const houseLogo = require("./assets/icons8-home-50.png");
    const pcIcon = <MaterialIcons name="computer" size={24} color="#88c9f2" />;
    const maIcon = <MaterialIcons name="groups-2" size={24} color="#88c9f2" />
    const mietIcon = <Fontisto name="money-symbol" size={24} color="#88c9f2" />
    const priceIcon = <MaterialIcons name="price-check" size={24} color='#88c9f2' />
    const buildIcon = <MaterialCommunityIcons name="office-building-marker-outline" size={24} color="#88c9f2" />
    const historyIcon = <FontAwesome5 name="history" size={24} color='#88c9f2' /> 
    const roomIcon = <MaterialIcons name="meeting-room" size={30} color='#88c9f2' />
    
    const { width, height } = Dimensions.get('screen');
    
    const [kachel, setKachel] = useState([
        { key: <Link href= '../maList'>Mitarbeiter</Link> , zahl:'366', proz: '+11%' , icon: maIcon},
        { key: <Link href='../mietpreis'>Mietpreise</Link>, zahl: '50.345', proz: '-6%', icon: mietIcon},
        { key: <Link href='../price'>Preis/m²</Link> ,zahl: '15 ' , icon: priceIcon},
        { key: <Link href= '../history'>Grundfläche</Link>, zahl: '3.356', icon: buildIcon}
    ]);
    const [kachel2, setKachel2] = useState([
        { key: <Link href= '../maList'>Mitarbeiter</Link> , zahl:'366', proz: '+11%' , icon: maIcon },
        { key: <Text>Arbeitsplätze</Text> , zahl:'134/500',text: 'Freie Arbeitsplätze', proz: '-7%' , icon: pcIcon },
        

    ]);

    const [kachel3, setKachel3] = useState([
        { key: <Link href= '../room'>Räume</Link> , zahl:'500', text: 'Räume', icon: roomIcon  },
        { key: <Link href= '../history'>Historie</Link> , zahl:'Daten', icon: historyIcon  },

    ]);
    
    const [fontsLoaded] = useFonts({
        'Oswald-Medium': require('./assets/fonts/Oswald/static/Oswald-Medium.ttf'),
        'FiraSans-SemiBold': require('./assets/fonts/Fira_Sans/FiraSans-SemiBold.ttf'),
        'Klavika-Medium': require('./assets/fonts/Klavika/klavika-medium.otf'),
        'Klavika-Regular': require('./assets/fonts/Klavika/klavika-regular-italic.otf'),

    })

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const txtTab1 = useState([
        { name: 'Status', key: '1' },
        { name: 'Mitarbeiter', key: '2', },
        { name: 'Gebäude', key: '3', }
    ]);
    {/*Tableiste unter Bild */ }
    const txtTab = {
        Status: 
        <View> 
            <FlatList
               numColumns={2}
               data={kachel}
               renderItem={({item}) => (
                            <View style={styles.kachelBg}>
                                <Text style={styles.kacheltext}>{item.key}</Text>

                                <View>
                                    <Text style={{color: 'white', 
                                                  fontFamily: 'Klavika-Regular', 
                                                  fontSize: 30, paddingTop: 10}}>{item.zahl}</Text>
                                </View>
                                <View>
                                    <Text style={{padding: 3, marginTop: 20, textAlign: 'right'}}>{item.proz}{item.icon}</Text>
                                </View>
                            </View>
               )} />
        </View>,
        Mitarbeiter: 
        <View> 
        <FlatList
           numColumns={2}
           data={kachel2}
           renderItem={({item}) => (
                        <View style={styles.kachelBg}>
                            <Text style={styles.kacheltext}>{item.key}</Text>

                            <View>
                                <Text style={{color: 'white', 
                                              fontFamily: 'Klavika-Regular', 
                                              fontSize: 25, paddingTop: 10}}>{item.zahl}</Text>
                            </View>
                            <View>
                                <Text style={{padding: 3, marginTop: 20, textAlign: 'right'}}>{item.proz}{item.icon}</Text>
                            </View>
                        </View>
           )} />
          </View>,

        Gebäude: 
        <View> 
        <FlatList
           numColumns={2}
           data={kachel3}
           renderItem={({item}) => (
                        <View style={styles.kachelBg}>
                            <Text style={styles.kacheltext}>{item.key}</Text>

                            <View>
                                <Text style={{color: 'white', 
                                              fontFamily: 'Klavika-Regular', 
                                              fontSize: 20, paddingTop: 10}}>{item.zahl}</Text>
                                              
                            </View>
                            <View>
                                <Text style={{padding: 3, textAlign: 'left', color: '#88c9f2'}}>{item.text}</Text>
                                <Text style={{padding: 10, marginLeft:5, textAlign:'right', }}>{item.icon}</Text>
                            </View>
                        </View>
           )} />
          </View>,
    }

    const data = Object.keys(txtTab).map((i) => ({
        key: i,
        title: i,
        txt: txtTab[i],
        ref: React.createRef()
    }));
    const Indicator = ({ measure, scrollX }) => {
        const inputRange = data.map((_, i) => i * width);
        const indicatorWidth = scrollX.interpolate({
            inputRange,
            outputRange: measure.map((measure) => measure.width),
        });
        const translateX = scrollX.interpolate({
            inputRange,
            outputRange: measure.map((measure) => measure.x),
        });

        return (
            <Animated.View
                style={{
                    position: 'absolute',
                    height: 4,
                    width: indicatorWidth,
                    left: 0,
                    backgroundColor: '#006EC7',
                    bottom: -5,
                    borderRadius: 2,
                    transform: [{
                        translateX
                    }]

                }} />
        );
    }

    const Tab = React.forwardRef(({item}, ref) => {
        return (
            <View ref={ref}>
                <Text style={{
                    color: 'black', fontSize: 20,
                    fontFamily: 'Klavika-Regular',
                }}>{item.title}</Text>
            </View>
        )
    })

    const Tabs = ({ data, scrollX }) => {
        const [measure, setMeasure] = React.useState([]);
        const containerRef = React.useRef();
        React.useEffect(() => {
            const m = []
            data.forEach(item => {
                item.ref.current.measureLayout(
                    containerRef.current, (x, y, width, height) => {
                        m.push({
                            x, y, width, height
                        });

                        if (m.length === data.length) {
                            setMeasure(m)
                        }
                    });

            });
        });

        return (

            <View style={{ position: 'absolute', top: 5, width }}>

                <View
                    ref={containerRef}
                    style={{
                        justifyContent: 'space-evenly',
                        flex: 1,
                        flexDirection: 'row',
                    }}>
                    {data.map(item => {
                        return <Tab key={item.key} item={item} ref={item.ref} />;
                    })}
                </View>
                {measure.length > 0 && (<Indicator measure={measure} scrollX={scrollX} />)}
            </View>
        );
    };
    {/** 
    
    const tab = ({item}) => {
        return(
            <View>
                <Text style={{color: 'black',
                    fontSize: 20, 
                    fontFamily: 'Klavika-Medium' }}>{item.title}</Text>
            </View>
        )
    }
    
    */}

    return (
        <View style={styles.container}>
            <View>
                <ImageBackground style={styles.bild} source={require('./assets/adessobild.png')} resizeMode="cover">

                    <View style={styles.coverTextBG}>
                        <Text style={styles.coverText}>Dortmund</Text>
                        <Text style={styles.coverUnderTxt}>Adessoplatz 1, 44269 Dortmund</Text>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1 }}>
                    <LinearGradient
                        style={styles.gradient}
                        colors={['rgba(#E5F0F9,#E5F0F9,#E5F0F9,0)', 'rgba(#E5F0F9,#E5F0F9,#E5F0F9,0.5)', '#E5F0F9', '#E5F0F9']}
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 2 }}
                    />
                </View>
            </View>
            <View style={{ alignContent: 'space-between', marginBottom: 15 }}>
                <Tabs scrollX={scrollX} data={data} />

            </View>

            <View>

                <Animated.FlatList
                    data={data}
                    keyExtractor={item => item.key}
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    style={{ marginTop: 15 }}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        { useNativeDriver: false }
                    )}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Text style={styles.kacheltext}>{item.txt}</Text>
                            </View>


                        )
                    }}
                />



                {/* <FlatList
                   numColumns={3}
                   data={tab}
                   renderItem={({ item })=> (
                    
                    <View style={styles.tabbBg}>
                        <Text style={styles.tabbar}>{item.name}</Text>
                    </View>
                   )}
                 />*/}

            </View>

            {/* <View>
               <FlatList
                   numColumns={2}
                   data={kachel}
                   renderItem={({ item })=> (
                    <View style={styles.kachelBg}>
                        <Text style={styles.kacheltext}>{item.key}</Text>
                    </View>
                   )}
                 />
            </View>*/}



        </View>





    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5F0F9',
    },
    tabbBg: {
        backgroundColor: '#E5F0F9',
        borderRadius: 5,
        height: 30,
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        paddingLeft: 20

    },
    tabbar: {
        color: 'black',
        fontSize: 20,
        fontFamily: 'Klavika-Medium',

        paddingLeft: 15,
        marginTop: 5,
        alignSelf: 'center',

    },

    tabView: {
        backgroundColor: 'black',
        fontStyle: 'normal',
        fontSize: 5,
    },
    bild: {
        height: 260,
        width: 380
    },
    coverText: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft: 10,
        fontFamily: 'Klavika-Medium'

    },
    coverUnderTxt: {
        color: '#70b6d7',
        paddingLeft: 10,
        fontFamily: 'Klavika-Regular'

    },
    coverTextBG: {
        backgroundColor: '#006EC7',
        width: 300,
        height: 70,
        borderTopEndRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: 10
    },
    gradient: {
        width: wp(100),
        height: hp(50),
        bottom: 0,
        position: 'absolute'
    },
    kachelBg: {
        backgroundColor: '#33a3ff',
        padding: 20,
        borderRadius: 10,
        margin: 20,
        height: 150,
        width: 150


    },
    kacheltext: {
        padding: 0,
        color: 'white',
        fontFamily: 'Klavika-Medium',
        fontSize: 15,

    }

})

