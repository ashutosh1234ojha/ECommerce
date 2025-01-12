import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { fontSize, spacing } from "../constants/dimensions"
import { fontFamily } from "../constants/fonts"
import { colors } from "../constants/colors"
import { category } from "../data/category"

const Category = () => {
    return (
    <FlatList data={category} renderItem={({item,index})=>(
        <TouchableOpacity>
        <Text style={styles.categoryText}>{item.name}</Text>
        <View style={styles.underline}/>
        </TouchableOpacity>
    )}
    keyExtractor={(item)=>item.id}
    horizontal
    ItemSeparatorComponent={
<View style={{paddingHorizontal:spacing.sm}}/>
    }
    />
    )
}

const styles = StyleSheet.create({
categoryText:{
    fontSize:fontSize.md,
    fontFamily:fontFamily.SemiBold,
    color:colors.grey
},
underline:{
    borderBottomColor:colors.purple,
    borderBottomWidth:2,
    width:"50%",
    marginTop:spacing.sm
}
})
export default Category