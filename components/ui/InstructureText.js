import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InstructureText({ children, style }) {
    return <Text style={[styles.intructionText, style]}>{children}</Text>
}

export default InstructureText;

const styles = StyleSheet.create({
    intructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    },
})
