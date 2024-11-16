import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { useFonts } from "expo-font";
import { ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
import SearchFilter from '../components/SearchFilter';





const Suche = () => {


    const [fontsLoaded] = useFonts({
        'Oswald-Medium': require('./assets/fonts/Oswald/static/Oswald-Medium.ttf'),
        'FiraSans-SemiBold': require('./assets/fonts/Fira_Sans/FiraSans-SemiBold.ttf'),
        'Klavika-Medium': require('./assets/fonts/Klavika/klavika-medium.otf'),
        'Klavika-Regular': require('./assets/fonts/Klavika/klavika-regular-italic.otf'),

    })
    const stadt = [
        {
            name: "Dortmund",
            img: require("./assets/adessobild.png"),
            id: "1",
            adresse: 'Adessoplatz 1, 44269 Dortmund'
        },
        {
            name: "Karlsruhe",
            img: require("./assets/adesso_karlsruhe.jpg"),
            id: "2",
            adresse: 'Frühlingsstraße 8, 76131 Karlsruhe'

        },
        {
            name: "Berlin",
            img: require("../assets/adesso_berlin.jpg"),
            id: "3",
            adresse: 'Prinzenstraße 34, 10969 Berlin'

        },
        {
            name: "Paderborn",
            img: require("../assets/adesso_paderborn.jpg"),
            id: "4",
            adresse: 'Lise-Meitner-Straße 1c, 33104 Paderborn'

        },
        {
            name: "Bremen",
            img: require("../assets/adesso_paderborn.jpg"),
            id: "5",
            adresse: 'Katharinenstraße 5, 28195 Bremen'

        }
    ]

  const [input, setInput] = useState("");
  


    return (

        <View style={styles.container}>
            <Text style={styles.text}>Finde deinen Standort</Text>

            <View style={styles.input}
            >

                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 1, marginRight: 4 }} />
                <TextInput
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    placeholder='Standort suchen'
                    style={styles.inputControl}
                    
                />
                
            </View>
            
            <SearchFilter data={stadt}  input={input} setInput={setInput}/>
        </View>

    );
}


export default Suche;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5F0F9',


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
    input: {
        margin: 20,
        padding: 10,
        flexDirection: 'row',
        width: '90%',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 20
    },
    inputControl: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: 30
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Klavika-Medium',
        fontSize: 25,
        marginTop: 10,
        marginLeft: 20
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