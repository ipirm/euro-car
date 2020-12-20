import React, {PureComponent} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default function CountrySwiper() {
    const width = Dimensions.get('window').width;
    const state2 = {
        activeIndex: 0,
        carouselItems: [
            {
                title: "Item 1",
                text: "Text 1",
            },
            {
                title: "Item 2",
                text: "Text 2",
            },
            {
                title: "Item 3",
                text: "Text 3",
            },
            {
                title: "Item 4",
                text: "Text 4",
            },
            {
                title: "Item 5",
                text: "Text 5",
            },
        ]
    }
    const _renderItem = () => {
        return (
            <View style={styles.containerSlider}>
                <View style={styles.swiperOverlay}>
                    <Image source={require('../../assets/images/car.png')}/>
                    <View style={styles.container}>
                        <Text style={styles.title}>Баку</Text>
                        <Text style={styles.desc}>130 машин</Text>
                    </View>
                </View>
                <View style={styles.swiperOverlay}>
                    <Image source={require('../../assets/images/car.png')}/>
                    <View style={styles.container}>
                        <Text style={styles.title}>Баку</Text>
                        <Text style={styles.desc}>130 машин</Text>
                    </View>
                </View>
            </View>
        )
    }
    return (
        // @ts-ignore
        <Carousel
            layout={"default"}
            data={state2.carouselItems}
            sliderWidth={width}
            itemWidth={width - 170}
            renderItem={_renderItem}
        />
    );

}


const styles = StyleSheet.create({
    containerSlider: {
        height: 200,
        transform: [
            {
                translateX: -80
            }
        ]
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#333333'
    },
    desc: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 16,
        color: '#333333'
    },
    container: {
        marginLeft: 30,
        justifyContent: 'center'
    },
    swiperOverlay: {
        marginBottom: 10,
        flex: 1,
        flexDirection: 'row',
    }
});