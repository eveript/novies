import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import * as Font from "expo-font";

import { AppLoading } from 'expo'
import {Asset} from "expo-asset";
import {Ionicons} from "@expo/vector-icons";


const cacheImages = images => images.map(image => {
    if (typeof image === 'string') {
        return Image.prefetch(image)
    } else {
        return Asset.fromModule(image).downloadAsync()
    }
})

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))
export default function App() {
    const [isReady, setIsReady] = useState(false)
    const loadAssets = () => {
        const images = cacheImages([
            "https://lh3.googleusercontent.com/ogw/ADGmqu8OM1cBYkzZ6Z4DVidC2d23yaGMRjrG-Ymn4K3g=s64-c-mo",
            require("./assets/splash.png")
        ])
        console.log(images)
        const fonts = cacheFonts([Ionicons.font])
        return Promise.all([...images, ...fonts])
    }
    const onFinish = () => setIsReady(true)
    return isReady ? <Text>Ready...</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
}
