import * as React from 'react';
import {Dimensions, StyleSheet, TextInput, View} from "react-native";
import {useState} from "react";


export default function TopSearch(props: any) {
    const {scrollA} = props;
    const isFloating = !!scrollA;
    const [value, onChangeText] = React.useState('Какую машину вы ищете?');
    const bannerHeight = Dimensions.get('window').height - 100;
    const [isTransperent, setTransperent] = useState(isFloating)
    const listedId = scrollA.addListener(a => {
        const topnaviOffset = bannerHeight - 80;
        if (isTransperent && a.value > topnaviOffset) {
            setTransperent(false)
        } else if (!isTransperent && a.value < topnaviOffset) {
            setTransperent(true)
        }
        return () => scrollA.removeListener(listedId)
    })


    return (
        <View style={
            // @ts-ignore
            styles.searchContainer(isFloating, isTransperent)
        }>
                <TextInput
                    style={{...styles.search,backgroundColor: isTransperent ? '#fff' : '#fafafa' }}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
            </View>
    )
}
const styles = StyleSheet.create({
    // @ts-ignore
    searchContainer: (isFloating, isTransperent) => ({
        padding: 30,
        backgroundColor: isTransperent ? 'transparent' : '#fff',
        shadowOffset: {y: 0},
        justifyContent: 'center',
        shadowOpacity: isTransperent ? 0 : 0.5,
        elevation: isTransperent ? 0.01 : 5,
        zIndex: 100,
        marginBottom: -120,
    }),
    search:{
        backgroundColor: '#fff',
        borderWidth: 0,
        borderRadius: 84,
        height: 52,
        shadowOpacity: 0,
        elevation: 0,
        textAlign: 'center'
    }
})