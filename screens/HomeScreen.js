import { FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native"
import { fontSize, iconSize, spacing } from "../constants/dimensions"
import { colors } from "../constants/colors"
import { fontFamily } from "../constants/fonts"
import Category from "../components/Category"
import ProductCard from "../components/ProductCard"
import { smartWatch } from "../data/smartwatch"
import { useState } from "react"
import { headphones } from "../data/headphones"


const HomeScreen = () => {

  const [data, setData] = useState(smartWatch)
  const [selectedCategory, setSelectedCategory] = useState("Smart Watch")
  const handleUpdateCategory = (newCategory) => {

    if(newCategory==="Smart Watch"){
      setData(smartWatch)
    }else if(newCategory==="Headphones"){
      setData(headphones)
    }
    setSelectedCategory(newCategory)
  }


  return <View style={styles.container}>
    <Text style={styles.headline}>Find your suitable watch now.</Text>
    <View style={styles.mainInputContainer}>
      <View style={styles.inputWrapper}>
        <Image style={styles.logo} source={require("../src/assets/search.png")} />

        <TextInput style={styles.textInput} placeholder="Search product" placeholderTextColor={colors.placeholderText} />
      </View>

      <View style={styles.categoryContainer}>
        <Image style={styles.logo} source={require("../src/assets/category.png")} />

      </View>
    </View>

    <FlatList
      ListHeaderComponent={<Category
        selectedCategory={selectedCategory}
        handleUpdateCategory={handleUpdateCategory}
      />}
      data={data} renderItem={({ item, index }) => <ProductCard item={item} />}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      contentContainerStyle={{ paddingBottom: 250 }}
      showsVerticalScrollIndicator={false}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: spacing.md
  },
  headline: {
    fontSize: fontSize.xxl,
    color: colors.black,
    fontFamily: fontFamily.Bold
  },
  mainInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md,

  },
  logo: {
    height: iconSize.sm,
    width: iconSize.sm
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize: spacing.md,
    fontFamily: fontFamily.Medium


  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,

  }

})
export default HomeScreen