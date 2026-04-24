import { Pressable, StyleSheet, Text, View } from 'react-native'
import { SvgSetaBaixo } from '../../../assets/svg/index'
import {PRIMARY_COLOR} from '../../theme/colors'
import { adjustHexColor } from '../../theme/colors-utils'

export const MyDropdownPicker = ({
    placeholder = "Selecione...",
    onPress = ()=>(console.log(placeholder))
}) => (
    <View style={[styles.containerView]}>
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.pressable,
                {
                    /*transform: [{ scale: pressed ? 0.95 : 1 }],*/
                    opacity: pressed ? 0.9 : 1,
                    backgroundColor: pressed ? adjustHexColor(PRIMARY_COLOR, 0.8) : '#fff',
                },
            ]}
        >
            <Text style={[styles.placeholder,]}>{placeholder}</Text>
            <View style={styles.containerSeta}>
                <SvgSetaBaixo/>
            </View>
        </Pressable>
    </View>
)

const styles = StyleSheet.create({
    containerView: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        height: 35
    },
    containerSeta: {
        backgroundColor: PRIMARY_COLOR,
        borderWidth: 0,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        maxWidth: 40
    },
    placeholder:{
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
})