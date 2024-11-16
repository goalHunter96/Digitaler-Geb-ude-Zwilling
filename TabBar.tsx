import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { color } from "react-native-elements/dist/helpers";
import { Ionicons } from '@expo/vector-icons';



const TabBar = ({ state, descriptors, navigation }) => {


  const icons = {
    Home: (props) => <AntDesign name="home" size={26} color={primary} {...props} />,
    Suche: (props) => <AntDesign name="search1" size={26} color={primary} {...props} />,
    Einstellung: (props) => <Ionicons name="settings-outline" size={26} color={primary} {...props} />
  }
  const primary = '#006EC7'
  const grey = '#737373'





  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, Home) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;


        const isFocused = state.index === Home;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbatItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >


            {
              icons[route.name]({
                color: isFocused ? primary : grey
              })
            }

            <Text style={{ color: isFocused ? primary : grey, fontSize: 11 }}>
              {label}
            </Text>







          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    borderCurve: 'continuous',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.1
  },
  tabbatItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  }

}

)