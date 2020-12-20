import * as React from 'react';
import {Alert, Animated, Button, Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {View} from '../components/Themed';
import {useRef} from "react";
import TopSearch from "../components/TopSearch";
import CountrySwiper from "../components/search/CountrySwiper";
import CarsSwiper from "../components/search/CarsSwiper";

const AppButton = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

export default function TabOneScreen() {
    const scrollA = useRef(new Animated.Value(0)).current;

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <View>
            <TopSearch scrollA={scrollA}/>
            <Animated.ScrollView
                style={{paddingBottom: 100}}
                onScroll={Animated.event([
                        {nativeEvent: {contentOffset: {y: scrollA}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>
                    <Animated.View
                        // @ts-ignore
                        style={styles.banner(scrollA, width, height)}
                    >
                        <Animated.Image
                            // @ts-ignore
                            style={styles.image(scrollA, width, height)}
                            source={require('../assets/images/main-bg.png')}
                        />
                        <View style={styles.bannerTextContainer}>
                            <Text style={styles.bannerText}>Иновации у ваших ног</Text>
                            <AppButton title="Найдите машину поблизости"
                                       onPress={() => Alert.alert('Right button pressed')}/>
                        </View>
                    </Animated.View>
                </View>
                <View style={styles.containerScroll}>
                <View style={styles.swiperContainer}>
                    <CountrySwiper/>
                </View>
                <View style={styles.swiperContainer}>
                    <Text style={styles.swiperContainerTitle}>Машины в тренде </Text>
                    <CarsSwiper/>
                </View>
                    <View style={styles.swiperContainer}>
                        <Text style={styles.swiperContainerTitle}>Машины в тренде </Text>
                        <CarsSwiper/>
                    </View>
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerScroll:{
       marginTop: 20
    },
    swiperContainerTitle: {
        lineHeight: 24,
        fontSize: 20,
        color: "#333333",
        fontWeight: "bold",
        marginBottom: 20
    },
    appButtonContainer: {
        marginTop: 25,
        elevation: 8,
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 12,
        height: 52,
        borderRadius: 10
    },
    appButtonText: {
        fontSize: 15,
        paddingTop: 7,
        color: "#333333",
        fontWeight: "bold",
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: "uppercase"
    },
    swiperContainer: {
        marginTop: 30,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
    },
    bannerTextContainer: {
        position: 'absolute',
        backgroundColor: 'transparent',
        padding: 20
    },
    bannerText: {
        fontWeight: 'bold',
        fontSize: 45,
        lineHeight: 45,
        color: '#fff',
    },
    bannerContainer: {
        marginTop: -1000,
        paddingTop: 1000,
        alignItems: 'center',
        overflow: 'hidden'
    },// @ts-ignore
    banner: (scrollA, width, height) => ({
        width: '100%',
        height: height - 100,
        justifyContent: 'center',
        transform: [
            {
                translateY: scrollA
            }
        ]
    }), // @ts-ignore
    image: (scrollA, width, height) => ({
        transform: [
            {
                scale: scrollA.interpolate({
                    inputRange: [-height, 0, height, height + 1],
                    outputRange: [2, 1, 2, 2]
                })
            }
        ]
    })
});