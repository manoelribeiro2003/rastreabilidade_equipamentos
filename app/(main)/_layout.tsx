import { Slot, useLocalSearchParams, router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR } from '@/src/theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { SvgSetaVoltar } from '@/assets/svg';
import ButtonTitleBar from '@/src/components/buttons/button-title-bar'

export default function Layout() {
    const insets = useSafeAreaInsets();
    const { title } = useLocalSearchParams<{ title?: string }>();
    const MainHeader = () => (
        <View style={[styles.containerTitleBar, { paddingTop: insets.top }]}>
            <View style={styles.headerContent}>

                <View style={[styles.side, { justifyContent: 'flex-start', gap: 10 }]}>
                    <ButtonTitleBar
                        SvgElement={SvgSetaVoltar}
                        onPress={() => {
                            if (router.canGoBack()) {
                                router.back();
                            }
                        }}
                    />
                </View>

                <Text style={styles.titleBar}>
                    {title?.toUpperCase() || 'App'}
                </Text>

                <View style={[styles.side, { justifyContent: 'flex-end', gap: 10 }]}>
                    {/* {<ButtonTitleBar
                        SvgElement={SvgSetaVoltar}
                    />
                    <ButtonTitleBar
                        SvgElement={SvgSetaVoltar}
                    />} */}
                </View>

            </View>
        </View>
    );
    const ContainerScreen = ({ children }: { children: React.ReactElement }) => (
        <View style={styles.containerScreen}>
            {children}
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <MainHeader />
            <ContainerScreen>
                <Slot />
            </ContainerScreen>

        </View>
    );
}

const styles = StyleSheet.create({
    containerScreen: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        padding: 20,
        alignItems: 'center'
    },
    containerTitleBar: {
        backgroundColor: PRIMARY_COLOR,
        elevation: 1,
        borderBottomRightRadius: 13,
        borderBottomLeftRadius: 13,
    },
    headerContent: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    titleBar: {
        position: 'absolute',
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    side: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
});