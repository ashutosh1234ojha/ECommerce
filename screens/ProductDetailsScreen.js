import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text } from "react-native"
import Header from "../components/Header"
import ProductImages from "../components/ProductImages"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { fontSize, iconSize, spacing } from "../constants/dimensions";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fonts";





const ProductDetailsScreen = () => {
    const item = useRoute().params.item
    console.log(item.images[0])

    return (
        <View>
            <Header />
            <ProductImages images={item.images} />
            <View style={styles.titleContainer}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.productTitle}>{item.name}</Text>
                    <Text style={styles.brand}>{item.brand}</Text>

                </View>

                <View style={styles.ratingWrapper}>
                    <FontAwesome6 name="star" iconStyle="solid" size={iconSize.sm} color={colors.yellow} />
                    <Text style={styles.ratingText}>4.8</Text>

                </View>
            </View>
        </View>

    )

}


const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row'
    },
    titleWrapper: {
        flex: 1,
        paddingHorizontal:spacing.md
    },
    productTitle: {
        fontFamily: fontFamily.Bold,
        color: colors.black,
        fontSize: fontSize.lg
    },
    brand: {
        fontFamily: fontFamily.Medium,
        color: colors.gray,
        fontSize: fontSize.sm,
        paddingVertical: spacing.sm

    },
    ratingWrapper: {

        flexDirection: 'row',
        alignItems: "center",
        gap: spacing.sm,
        backgroundColor: colors.lavender,
        borderRadius: spacing.md,
        padding: spacing.md,
        height: 50,
        marginTop: spacing.md
    },
    ratingText: {
        color: colors.gray,
        fontFamily: fontFamily.Medium,
        fontSize: fontSize.md,


    }

})

export default ProductDetailsScreen


