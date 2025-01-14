import { useNavigation, useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"
// import Ionicons from '@react-native-vector-icons/ionicons';
import { iconSize, spacing } from "../constants/dimensions"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import LinearGradient from "react-native-linear-gradient";
import { colors } from "../constants/colors";
import { Suspense } from "react";
import { fontFamily } from "../constants/fonts";





const CartButton = () => {

    return (
        <View style={styles.container} >
            <LinearGradient style={styles.addToCartBtn} colors={["#8743ff", "#4136f1"]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}>
                <FontAwesome6 name="cart-shopping" iconStyle="solid" size={iconSize.md} color={colors.background} />

                <Text style={styles.addToCart}>Add to cart</Text>
            </LinearGradient>

        </View>
    )

}


const styles = StyleSheet.create({
    container: {
       
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: spacing.md,
        
    },
    addToCart: {
        padding: 20,
        color: colors.background,
        fontFamily:fontFamily.Bold
    },
    addToCartBtn: {
        width: "90%",
        padding: spacing.md,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius:spacing.md

    }
})

export default CartButton


