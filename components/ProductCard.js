import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { colors } from "../constants/colors"
import { fontSize, spacing } from "../constants/dimensions"
import { fontFamily } from "../constants/fonts"
import { useNavigation } from "@react-navigation/native";



const ProductCard = ({item}) => {
   const navigation = useNavigation();

   const handleProductDetailsScreen = () => {
     navigation.navigate("PRODUCT_DETAILS", { item });
   };
  
    return (
        <TouchableOpacity style={styles.container}    onPress={handleProductDetailsScreen}
        >
            <View style={styles.imageWrapper}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.brand}>{item.brand}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "48%",
        elevation: 5,
        backgroundColor: colors.background,
        borderRadius: 12,
        marginVertical: spacing.md
    },
    imageWrapper: {
        borderRadius: 12,
        backgroundColor: "#ffc887",
        margin: spacing.sm
    },
    productImage: {
        height: 120,
        width: "100%",
        resizeMode: 'center'
    },
    contentContainer: {
        paddingHorizontal:spacing.md,
        paddingBottom:spacing.md
    },
    name: {
        color: colors.black,
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold
    },
    brand: {
        color: colors.gray,
        fontFamily: fontFamily.Medium,
        fontSize: fontSize.md,
        paddingVertical: spacing.xs
    },
    price: {
        color: colors.purple,
        fontSize: fontSize.md,
        fontFamily: fontFamily.Medium,


    },
    
})

export default ProductCard
