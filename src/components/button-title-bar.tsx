import { Pressable, StyleSheet, View } from 'react-native';
import Svg, { Path } from "react-native-svg";
import PRIMARY_COLOR from "../../src/config/theme";

function SvgPlaceHolder(props: any) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#fff"
            {...props}
        >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M21 5v6.59l-2.29-2.3c-.39-.39-1.03-.39-1.42 0L14 12.59 10.71 9.3a.996.996 0 00-1.41 0L6 12.59 3 9.58V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42l3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l2.29 2.29c.39.39 1.02.39 1.41 0l3.3-3.3 3.29 3.29c.39.39 1.02.39 1.41 0l3.3-3.28z" />
        </Svg>
    )
}

function lightenHex(hex: string, percent: number) {
    const num = parseInt(hex.replace('#', ''), 16);

    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;

    r = Math.round(r + (255 - r) * percent);
    g = Math.round(g + (255 - g) * percent);
    b = Math.round(b + (255 - b) * percent);

    return (
        '#' +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
    );
}

const ButtonTitleBar = ({
    SvgElement = SvgPlaceHolder,
    buttonSize = 60,
    onPress = () => alert("Botao Clicado"),
    defaultBackgroudColor = PRIMARY_COLOR,
    defaultlightenHex = 0.15
}) => (


    <View style={[
        styles.buttonView,
        { 
            borderRadius: buttonSize * 0.25, 
            width: buttonSize * 0.7, 
            backgroundColor: lightenHex(defaultBackgroudColor, defaultlightenHex)
        }
    ]}>
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.pressable,
                {
                    transform: [{ scale: pressed ? 0.95 : 1 }],
                    opacity: pressed ? 0.85 : 1,
                },
            ]}
        >
            <SvgElement
                height={buttonSize * 0.4}
                style={{ aspectRatio: 1 }}
            />
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    buttonView: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: PRIMARY_COLOR,
        aspectRatio: 1,
    },
    pressable: {
        width: '100%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ButtonTitleBar;
