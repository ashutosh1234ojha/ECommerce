import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native"
import Header from "../components/Header"
import ProductImages from "../components/ProductImages"
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import { fontSize, iconSize, spacing } from "../constants/dimensions";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fonts";
import { useState } from "react"



const colorData = [
    {
        colorName: "Silver",
        colorValue: "#F0F2F2"

    },
    {
        colorName: "Bright Oragne",
        colorValue: "#F25745"

    },
    {
        colorName: "Starlight",
        colorValue: "#FAF6F2"

    }
]


const ProductDetailsScreen = () => {
    const item = useRoute().params.item
    console.log(item.images[0])

    const [selectedColor, setSelectedColor] = useState("")

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

            <View style={styles.colorContinaer}>
                <Text style={styles.colorsHeading}>Colors</Text>
                <FlatList data={colorData} renderItem={({ item }) => {
                    return (

                        <TouchableOpacity onPress={() => { setSelectedColor(item.colorValue) }} 
                        style={[styles.selectColorContainer, item.colorValue === selectedColor && { borderColor: colors.purple }]}>
                            <View style={[styles.circleColor, { backgroundColor: item.colorValue }]} />


                            <Text style={styles.colorText}>{item.colorName}</Text>
                        </TouchableOpacity>
                    )
                }}
                    horizontal
                    ItemSeparatorComponent={() => (<View
                        style={{ width: spacing.sm }}
                    />)}
                />


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
        paddingHorizontal: spacing.md
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
    },
    colorContinaer: {
        paddingTop: spacing.md,
        margin: spacing.md
    },
    colorsHeading: {

        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold,
        color: colors.black,
        paddingBottom: spacing.md
    },
    selectColorContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 4,
        padding: spacing.sm,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'

    },
    circleColor: {
        height: spacing.md,
        width: spacing.md,
        backgroundColor: colors.purple,
        borderRadius: spacing.md / 2,
        marginEnd: spacing.sm

    },
    colorText: {
        fontSize: fontSize.sm,
        fontFamily: fontFamily.Medium,
        color: colors.black

    }

})

export default ProductDetailsScreen


