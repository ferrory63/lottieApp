import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import Lottie from 'lottie-react-native'

const App = () => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" />

            <Lottie
                source={require('./shared/lottie/133564-typing.json')}
                autoPlay
                loop
                style={styles.lottieContainer}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    lottieContainer: {
        width: 200,
        height: 200,
    },
})

export default App
