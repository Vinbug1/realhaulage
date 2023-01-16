import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#4bdbed"
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "white"
      },
      separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
      },

});
