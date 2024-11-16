import { Tabs } from "expo-router";
import TabBar from "../components/TabBar";



export default () => {
    return (
        <Tabs
            tabBar={props => <TabBar {...props} />}>

            <Tabs.Screen name="Home" options={{
                headerStyle: { backgroundColor: '#006EC7' },
                headerTintColor: 'white'
            }} />
            <Tabs.Screen name="Suche" options={{
                headerStyle: { backgroundColor: '#006EC7' },
                headerTintColor: 'white'
            }} />
            <Tabs.Screen name="Einstellung" options={{
                headerStyle: { backgroundColor: '#006EC7' },
                headerTintColor: 'white'
            }} />
          

        </Tabs>

    )
}



/* tabBar={props=> <TabBar {...props} />}*/