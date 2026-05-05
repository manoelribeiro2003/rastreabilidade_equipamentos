import { Pressable, StyleSheet, Text, View, DimensionValue, PressableProps } from 'react-native'
import { SvgSetaBaixo } from '../../../assets/svg/index'
import { PRIMARY_COLOR } from '../../theme/colors'
import { adjustHexColor } from '../../theme/colors-utils'


type MyDropdownPickerProps = {
    placeholder?: string;
    maxWidth?: DimensionValue;
    height?: DimensionValue;
  } & Omit<PressableProps, 'children'>;
  
  export const MyDropdownPicker = ({
    placeholder = 'Selecione...',
    maxWidth = 40,
    height = 35,
    onPress = () => console.log(placeholder), // ✅ onPress padrão
    style,
    ...pressableProps
  }: MyDropdownPickerProps) => {
    return (
      <View style={styles.containerView}>
        <Pressable
          onPress={onPress}
          {...pressableProps}
          style={(state) => [
            styles.pressable,
            {
              opacity: state.pressed ? 0.9 : 1,
              backgroundColor: state.pressed
                ? adjustHexColor(PRIMARY_COLOR, 0.8)
                : '#fff',
              height,
            },
            typeof style === 'function'
              ? style(state)
              : style,
          ]}
        >
          <Text style={styles.placeholder}>{placeholder}</Text>
  
          <View style={[styles.containerSeta, { maxWidth }]}>
            <SvgSetaBaixo />
          </View>
        </Pressable>
      </View>
    );
  };
  



const styles = StyleSheet.create({
    containerView: {
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        borderRadius: 14,
        overflow: 'hidden',
        width: '100%',
        flexDirection: 'row',
    },
    pressable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flex: 1
    },
    containerSeta: {
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    placeholder: {
        paddingLeft: 8,
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: '500'
    }
})