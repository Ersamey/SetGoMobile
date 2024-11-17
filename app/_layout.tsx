import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Pages */}
        <Stack.Screen name="index" />
        <Stack.Screen name="Pages/login" />
        <Stack.Screen name="Pages/register" />
        
        {/* Siswa Pages */}
        <Stack.Screen name="Pages/Siswa/kelas" />
        <Stack.Screen name="Pages/Siswa/detail" />
        <Stack.Screen name="Pages/Siswa/materi" />
        <Stack.Screen name="Pages/Siswa/quiz" />
        
        {/* Guru Pages */}
        <Stack.Screen name="Pages/guru/ListClass" />
        <Stack.Screen name="Pages/guru/CreateClass" />
        <Stack.Screen name="Pages/guru/Class" />
        <Stack.Screen name="Pages/guru/ListSiswa" />
        <Stack.Screen name="Pages/guru/Tambah" />
        <Stack.Screen name="Pages/guru/Add" />
      </Stack>
    </GestureHandlerRootView>
  );
}
