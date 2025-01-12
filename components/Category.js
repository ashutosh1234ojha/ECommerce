import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { fontSize, spacing } from "../constants/dimensions"
import { fontFamily } from "../constants/fonts"
import { colors } from "../constants/colors"
import { category } from "../data/category"
import { useState } from "react"

const Category = () => {
    const [selectedCategory, setSelectedCategory] = useState("Smart Watch")
    const handleSelectedCategory = (category) => {
        setSelectedCategory(category)
    }
    return (
        <FlatList
         data={category} renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => { setSelectedCategory(item.name) }}>
                <Text style={[styles.categoryText, selectedCategory === item.name && { color: colors.purple }]}>{item.name}</Text>
                {
                    (selectedCategory === item.name) ? <View style={styles.underline} /> : null


                }
            </TouchableOpacity>
        )}
            keyExtractor={(item) => item.id}
            horizontal
            ItemSeparatorComponent={
                <View style={{ paddingHorizontal: spacing.sm }} />
            }
            showsHorizontalScrollIndicator={false}

        />
    )
}

const styles = StyleSheet.create({
    categoryText: {
        fontSize: fontSize.md,
        fontFamily: fontFamily.SemiBold,
        color: colors.grey
    },
    underline: {
        borderBottomColor: colors.purple,
        borderBottomWidth: 2,
        width: "50%",
        marginTop: spacing.sm
    }
})
export default Category