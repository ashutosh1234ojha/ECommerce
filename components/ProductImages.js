import { useRoute } from "@react-navigation/native"
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, FlatList } from "react-native"
// import Ionicons from '@react-native-vector-icons/ionicons';
import { iconSize, spacing } from "../constants/dimensions"
import { colors } from "../constants/colors";
import { useState ,useRef} from "react"


const screenWidth = Dimensions.get("window").width



const ProductImages = ({ images }) => {

    const [activeSlide,setActiveSlide]=useState(0)

    const onViewRef=useRef((viewableItems)=>{

        if(viewableItems.viewableItems.length>0){
            setActiveSlide(viewableItems.viewableItems[0].index)
        }
    })
    return (
        <>
            <FlatList data={images} renderItem={({ item, index }) => {
                return (
                    <View style={styles.productImageWrapper} >
                        <Image style={styles.productImage} source={{ uri: item }} />

                    </View>


                )

            }}
            onViewableItemsChanged={onViewRef.current}
            keyExtractor={(item,index)=>index}

                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                snapToInterval={screenWidth}
                decelerationRate={"fast"}

            />

            <View style={styles.pagination}>
                {
                    images.map((_, index) => (
                        <View
                        key={index}
                         style={[styles.dot,index===activeSlide&&{width:20,borderRadius:32},{backgroundColor:index==activeSlide?colors.purple:colors.gray} ]} />
                    ))
                }
            </View>
        </>
    )

}


const styles = StyleSheet.create({


    productImageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        paddingTop: spacing.sm
    },
    productImage: {
        height: 350,
        width: 350,
        resizeMode: 'cover',
        borderRadius: 10
    },
    pagination: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: spacing.md,
        flexDirection:'row'
    },

    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        marginHorizontal: spacing.xs,
        backgroundColor: colors.gray

    }


})

export default ProductImages


