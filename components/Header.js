import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
// import Ionicons from '@react-native-vector-icons/ionicons';
import { iconSize } from "../constants/dimensions"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';





const Header = () => {

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.iconStyle}>
                <FontAwesome6 name="arrow-left" iconStyle="solid" size={iconSize.md} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconStyle}>
                <FontAwesome6 style={styles.iconStyle} name="heart" iconStyle="solid" size={iconSize.md} />
            </TouchableOpacity>

        </View>
    )
    
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    iconStyle: {
        padding: 20
    }
})

export default Header


