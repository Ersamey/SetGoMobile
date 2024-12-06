import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const BottomNavbar = () => {
    const router = useRouter();

    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push(`/Pages/Siswa/kelas`)}>
                <FontAwesome name="home" size={24} color="#661FF8" />
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/search')}>
                <FontAwesome name="compass" size={24} color="#661FF8" /> {/* Ganti ke kompas */}
                <Text style={styles.navText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/messages')}>
                <FontAwesome name="envelope" size={20} color="#661FF8" />
                <Text style={styles.navText}>Messages</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem} onPress={() => router.push('/Pages/Siswa/profile')}>
                <FontAwesome name="user" size={20} color="#661FF8" />
                <Text style={styles.navText}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        position: 'absolute',
        bottom: -10,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    navItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    navText: {
        color: 'white',
        fontSize: 14,
        marginTop: 5,
    },
});

export default BottomNavbar;
