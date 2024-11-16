import React from "react";
import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Einstellung = () => {
    const pic = require('./assets/Mann.webp');
    const camera = <Feather name="camera" size={24} color="black" />

    const icon = [
        {
            name: <MaterialCommunityIcons name="office-building-marker" size={40} color="#006EC7" />,
            text1: <Link href='./Suche'>Mein Arbeitsbereich</Link>,
            text2: 'Wähle deinen Standort aus'
        },
        {
            name: <FontAwesome6 name="building-user" size={30} color="#006EC7" />,
            text1: <Link href='../aboutus'>Über uns</Link>,
            text2: 'Wähle deinen Standort aus'
        },
        {
            name: <FontAwesome5 name="user-cog" size={30} color="#006EC7" />,
            text1: <Link href='../profile'>Profil bearbeiten</Link>,
            text2: 'Wähle deinen Standort aus'
        },
        {
            name: <MaterialIcons name="logout" size={40} color="#006EC7" />,
            text1: <Link href='../Login'
                    onPress={()=>{
                        Alert.alert('Logout', 'Sie wurden ausgeloggt!');
                    }}>Abmelden</Link>,
            text2: 'Wähle deinen Standort aus'
        }


    ]

    const [fontsLoaded] = useFonts({
        'Oswald-Medium': require('./assets/fonts/Oswald/static/Oswald-Medium.ttf'),
        'FiraSans-SemiBold': require('./assets/fonts/Fira_Sans/FiraSans-SemiBold.ttf'),
        'Klavika-Medium': require('./assets/fonts/Klavika/klavika-medium.otf'),
        'Klavika-Regular': require('./assets/fonts/Klavika/klavika-regular-italic.otf'),

    })
    return (

        <View style={styles.container}>

          <View style={{position: 'relative'}}>
                <Image source={pic} style={{
                  width: 150,
                  height: 150,
                  alignSelf: 'center',
                  marginTop: 20,
                  
                }} />
               <View style={{backgroundColor: '#006EC7', 
                  width: 34, 
                  height: 34,
                  borderRadius: 9999,
                  right: 110,
                  bottom: -2,
                  margin: 2,
                  position: 'absolute',
                  alignItems: 'center',
                  justifyContent: 'center'}}>
                      <Ionicons name="camera" size={24} color="#fff" />
              </View>
            </View>

                

            <View>
                <Text style={{ fontFamily: 'Klavika-Medium', fontSize: 30, marginTop: 10, textAlign:'center'}}>Bernhard Wagner</Text>
                <Text style={{ fontFamily: 'Klavika-Regular', fontSize: 20, marginTop: 10, textAlign:'center' }}>Vorstand</Text>
            </View>


            <View style={styles.listBg}>

                <FlatList
                    numColumns={1}
                    data={icon}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: 'white', marginBottom: 20, marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text>{item.name}</Text>
                                <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                                    <Text style={{ fontFamily: 'Klavika-Regular', fontSize: 30 }}>{item.text1}</Text>
                                    <Text style={{ fontFamily: 'Klavika-Regular', fontSize: 20, color: '#c4c4c4' }} >{item.text2}</Text>
                                </View>

                            </View>



                        </View>

                    )
                    }
                />


            </View>



        </View >




    )
}


/*   <View style={{flexDirection:'column', width: '80%'}}>
                        <Text>Mein Arbeitsplatz</Text>
                        <Text>Wähle dein jetzigen Standort aus.</Text>
                      </View> */

export default Einstellung;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5F0F9',

    },
    listBg: {
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    camera: {

        width: 50,
        height: 50,

        position: 'absolute',
        right: -90,
        bottom: -10
    },

    pic: {
        marginTop: 20,
        width: 170,
        height: 170,
        borderRadius: 9999
    },

    headerBg: {
        backgroundColor: '#006EC7',
        borderRadius: 5,
        /*width: 400,
        height: 60,
        alignSelf: 'auto',*/
        padding: 10
    },

    headerText: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center'
    },




    btn: {
        backgroundColor: 'lightgrey',
        borderRadius: 2,
        borderWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 200

    },
    btnText: {
        color: '#fff',
        fontSize: 20
    },
    bottonHouseBg: {
        backgroundColor: '#006EC7',
        height: 60,
        marginTop: 120
    },
    house: {
        fontSize: 2,
        height: 40,
        width: 40,
        alignSelf: 'center'

    },
    houseLogoTxt: {
        color: 'white',
        fontSize: 9,
        alignSelf: 'center'
    }

});