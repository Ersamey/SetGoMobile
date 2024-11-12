import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Pages/login" />
      <Stack.Screen name="Pages/register" />
      <Stack.Screen name="Pages/Siswa/kelas" />
    </Stack>
  );
}
