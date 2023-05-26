import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    Dimensions,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native"

import { useState } from "react";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructureText from "../components/ui/InstructureText";
import PrimaryButton from "../components/ui/PrimaryButton"
import ButtonRows from "../components/ui/ButtonRows";

function StartGameScreen({ onConfirmNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    const { width, height } = useWindowDimensions();

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number',
                'Number has to be a number between 1 and 99',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        onConfirmNumber(chosenNumber);
    }

    const marginTop = height < 380 ? 30 : 100;


    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer, { marginTop: marginTop }]}>
                    <Title >Guess My Number</Title>
                    <Card>
                        <InstructureText>Enter a Number</InstructureText>
                        <TextInput
                            maxLength={2}
                            keyboardType="number-pad"
                            style={styles.numberInput}
                            autoCapitalize='none'
                            autoCorrect={false}
                            value={enteredNumber}
                            onChangeText={numberInputHandler} />
                        <ButtonRows>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </ButtonRows>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

export default StartGameScreen;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonContainer: {
        flex: 1
    },

});