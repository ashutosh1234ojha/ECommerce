import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text } from "react-native"
import Header from "../components/Header"
import ProductImages from "../components/ProductImages"





const ProductDetailsScreen = () => {
    const item = useRoute().params.item
    console.log(item.images[0])

    return (
        <View>
        <Header/>
        <ProductImages images={item.images}/>
        </View>
    )

}


const styles = StyleSheet.create({

})

export default ProductDetailsScreen


