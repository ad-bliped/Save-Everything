import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Foorink' }} />
      <Stack.Screen name="new-entry" options={{ title: '기록 작성' }} />
      <Stack.Screen name="entry/[id]" options={{ title: '상세 보기' }} />
      <Stack.Screen name="settings" options={{ title: '설정' }} />
    </Stack>
  );
}
