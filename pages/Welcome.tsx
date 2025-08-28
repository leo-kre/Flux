import GradientText from 'components/GradientText';
import '../global.css';
import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

export default function Welcome({ navigation }: Props) {
  return (
    <View className="flex-1 items-start justify-around bg-black">
      <View className="flex h-4/6 w-full items-center justify-center">
        <View className="align-center flex w-11/12 items-center ">
          <Text className="ml-2 h-[85px] w-full text-left text-[5.25rem] font-medium text-white">
            Welcome
          </Text>
          <Text className="ml-2 mt-[-15px] h-[85px] w-full text-left text-[5.25rem] font-medium text-white">
            to
          </Text>

          <GradientText
            text="Flux"
            textClassName="text-[12rem] font-bold text-justify text-center"
            containerClassName="h-[190px] mt-[-25px] w-full"
            gradientColor="default"></GradientText>
        </View>
      </View>

      <View className="mt-4 h-1/6 w-full items-center">
        <Pressable
          className="w-11/12 rounded-3xl border border-white p-5 px-8"
          onPress={() => navigation.navigate('ConnectAppleHealth')}
          accessibilityRole="button">
          <Text className="w-full text-center text-3xl font-semibold text-white">Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
