import GradientText from 'components/GradientText';
import '../global.css';
import { View, Text, Pressable, Image, Alert, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

import Apple_Health_Icon from '../assets/Apple_Health_Icon.png';

type Props = NativeStackScreenProps<RootStackParamList, 'ConnectAppleHealth'>;

import RequestAppleHealthPermissions from 'components/RequestAppleHealthPermissions';

export default function ConnectAppleHealth({ navigation }: Props) {
  const onPressConnect = async () => {
    if (Platform.OS != 'ios') {
      Alert.alert('Only available on ios');
      return;
    }

    try {
      await RequestAppleHealthPermissions();
      navigation.navigate('Home');
    } catch (e: any) {
      Alert.alert('HealthKit error', String(e?.message ?? e));
    }
  };

  return (
    <View className="h-full w-full flex-1 items-center justify-around bg-white dark:bg-black">
      <View className="flex h-4/6 w-11/12 justify-center">
        <Text className="text-6xl font-semibold text-black dark:text-white">Find your</Text>

        <View className="w-full flex-row">
          <GradientText
            text="rhythm"
            textClassName="text-6xl font-semibold"
            gradientColor="purple"></GradientText>
          <Text className="text-6xl font-semibold text-black dark:text-white">.</Text>
        </View>

        <Text className="text-6xl font-semibold text-black dark:text-white">Study when</Text>
        <Text className="text-6xl font-semibold text-black dark:text-white">you're</Text>

        <View className="w-full flex-row">
          <GradientText
            text="energized"
            textClassName="text-6xl font-semibold"
            gradientColor="green"></GradientText>
          <Text className="text-6xl font-semibold text-black dark:text-white">,</Text>
        </View>

        <Text className="text-6xl font-semibold text-black dark:text-white">rest when</Text>
        <Text className="text-6xl font-semibold text-black dark:text-white">you need it.</Text>
      </View>

      <View className="h-1/6 w-full items-center">
        <Pressable
          className="w-11/12 rounded-3xl border border-black p-2 dark:border-white"
          onPress={() => onPressConnect()}
          accessibilityRole="button">
          <View className="flex w-full flex-row items-center gap-2">
            <Image source={Apple_Health_Icon} className="aspect-square w-1/5"></Image>
            <View className="mr-4 w-4/5">
              <View className="">
                <Text className="text-center text-2xl font-bold text-black dark:text-white">
                  Connect Apple
                </Text>
                <Text className="text-center text-2xl font-bold text-black dark:text-white">
                  Health
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
