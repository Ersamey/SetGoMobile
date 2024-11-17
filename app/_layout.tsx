import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="Pages/login" />
        <Stack.Screen name="Pages/register" />
        <Stack.Screen name="Pages/Siswa/kelas" />
        <Stack.Screen name="Pages/Siswa/detail" />
        <Stack.Screen name="Pages/Siswa/materi" />
        <Stack.Screen name="Pages/Siswa/quiz" />

        <Stack.Screen name="Pages/guru/ListClass" />
        <Stack.Screen name="Pages/guru/CreateClass" />
        <Stack.Screen name="Pages/guru/Class" />
        <Stack.Screen name="Pages/guru/ListSiswa" />

        <Stack.Screen name="Pages/Soal/pg" />
        <Stack.Screen name="Pages/Soal/essay" />
        <Stack.Screen name="Pages/Soal/susun" />
        <Stack.Screen name="Pages/Soal/pgimg" />
        <Stack.Screen name="Pages/Soal/relasi" />
        </Stack>
      </GestureHandlerRootView>
    
  );
}
