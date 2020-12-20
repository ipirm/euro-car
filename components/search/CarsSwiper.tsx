import React, {PureComponent} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default function CarsSwiper() {
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
            <View style={styles.carSlider}>
                <View style={styles.swiperOverlay}>
                    <Image source={require('../../assets/images/amg.png')}/>
                    <Text style={styles.title}>Mercedes C class</Text>
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
            itemWidth={width - 150}
            renderItem={_renderItem}
        />
    );

}


const styles = StyleSheet.create({
    carSlider: {
        transform: [
            {
                translateX: -70
            }
        ]
    },
    title: {
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 22,
        color: '#333333'
    },
    container: {},
    swiperOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E9E9E9',
        padding: 30,
        height: 150,
        flex: 1,
    }
});