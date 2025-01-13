import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text } from "react-native"
import Header from "../components/Header"





const ProductDetailsScreen = () => {
    const item = useRoute().params.item
    

    return (
        <View>
        <Header/>
        <Text>{item.name}</Text>
        </View>
    )

}


const styles = StyleSheet.create({

})

export default ProductDetailsScreen


