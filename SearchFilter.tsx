import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useFonts } from 'expo-font'
import Suche from '../tab/Suche'
import { Link } from 'expo-router'
import Home from '../tab/Home'
import { AntDesign } from '@expo/vector-icons';


const SearchFilter = ({ data, input, setInput }) => {
    const [fontsLoaded] = useFonts({
        'Oswald-Medium': require('./fonts/Oswald/static/Oswald-Medium.ttf'),
        'FiraSans-SemiBold': require('./fonts/Fira_Sans/FiraSans-SemiBold.ttf'),
        'Klavika-Medium': require('./fonts/Klavika/klavika-medium.otf'),
        'Klavika-Regular': require('./fonts/Klavika/klavika-regular-italic.otf'),

    })


    return (
        <View style={{ marginTop: 10, marginLeft: 10 }}>
            <FlatList data={data}
                renderItem={({ item }) => {
                    if (input === "") {
                        return (
                            <View style={{
                                marginVertical: 10,
                                backgroundColor: '#83c3f1',
                                height: 85,
                                borderRadius: 7,
                                marginRight: 10,
                                marginLeft: 10,
                                flexDirection: "row"
                            }}>

                                <View>
                                    <Image
                                        source={item.img}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 40,
                                            padding: 7,
                                            margin: 7
                                        }} />
                                </View>


                                <View>
                                    <Link
                                        style={{
                                            fontSize: 30,
                                            fontFamily: 'Klavika-Regular',
                                            padding: 2,
                                            textAlign: 'left',
                                            marginTop: 20,
                                            color: 'white'
                                        }}
                                        href='../tab/Home' >
                                        {item.name}
                                    </Link>

                                    <Text style={{
                                        fontSize: 12,
                                        color: 'white',
                                        paddingLeft: 5,
                                        fontFamily: 'Klavika-Regular',
                                        textAlign: 'left'
                                    }}>{item.adresse}  
                                    </Text>
                                </View>

                                <View>
                              
                                </View>

                            </View>
                        )
                    }
                    if (item.name.toLowerCase().includes(input.toLowerCase())) {
                        return (
                            <View style={{
                                marginVertical: 10,
                                backgroundColor: '#83c3f1',
                                height: 85,
                                borderRadius: 7,
                                marginRight: 10,
                                marginLeft: 10,
                                flexDirection: "row"
                            }}>

                                <View>
                                    <Image
                                        source={item.img}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 40,
                                            padding: 7,
                                            margin: 7
                                        }} />
                                </View>



                                <View>
                                    <Link
                                        style={{
                                            fontSize: 30,
                                            fontFamily: 'Klavika-Regular',
                                            padding: 2,
                                            textAlign: 'left',
                                            marginTop: 20,
                                            color: 'white'
                                        }}
                                        href='../tab/Home' >
                                        {item.name}
                                    </Link>

                                    <Text style={{
                                        fontSize: 12,
                                        color: 'white',
                                        paddingLeft: 5,
                                        fontFamily: 'Klavika-Regular',
                                        textAlign: 'left'
                                    }}>{item.adresse}

                                    </Text>
                                </View>
                            </View>
                        )
                    }
                }} />
        </View >
    )
}

export default SearchFilter

const styles = StyleSheet.create({

})