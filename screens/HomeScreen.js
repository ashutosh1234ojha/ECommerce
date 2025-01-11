import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { fontSize, iconSize, spacing } from "../constants/dimensions"
import { colors } from "../constants/colors"
import { fontFamily } from "../constants/fonts"


const HomeScreen = () => {

  return <View style={styles.container}>
    <Text style={styles.headline}>Find your suitable watch now.</Text>
    <View style={styles.mainInputContainer}>
      <View style={styles.inputWrapper}>
        <TextInput style={styles.textInput} placeholderText="Search product" placeholderTextColor={colors.placeholderText} />
        <Image style={styles.logo} source={require("../src/assets/search.png")} />
      </View>

      <View style={styles.categoryContainer}>
        <Image style={styles.logo} source={require("../src/assets/category.png")} />

      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: spacing.mds
  },
  inputWrapper: {
    flex: 1,

    flexDirection: 'row',
    borderWidth: 2,
    alignItems: 'center',
    borderColor: colors.placeholderText,
    borderRadius: 44,
    paddingHorizontal: spacing.md

  },
  logo: {
    height: iconSize.sm,
    width: iconSize.sm
  },
  textInput: {
    flex: 1,
    paddingHorizontal: spacing.md,
    fontSize:spacing.md,
    fontFamily:fontFamily.Medium


  },
  categoryContainer: {
    paddingHorizontal: spacing.sm,

  }

})
export default HomeScreen