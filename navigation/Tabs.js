import React, {useEffect} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Favs from "../screens/Favs";

const Tabs = createBottomTabNavigator();

export default ({navigation, route}) => {
    useEffect(() => {
        navigation.setOptions({
            title: route?.state?.routeNames[route.state.index] || "Movies"
        })
    }, [route])
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies} />
            <Tabs.Screen name="TV" component={Tv} />
            <Tabs.Screen name="Search" component={Search} />
            <Tabs.Screen name="Favs" component={Favs} />
        </Tabs.Navigator>
    )

}
