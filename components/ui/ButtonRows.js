import { View, StyleSheet } from "react-native";


function ButtonRows({ children }) {
    return <View style={styles.buttonsContainer}>{children}</View>
}

export default ButtonRows;

const styles = StyleSheet.create({
    buttonsContainer: { flexDirection: "row" }
})