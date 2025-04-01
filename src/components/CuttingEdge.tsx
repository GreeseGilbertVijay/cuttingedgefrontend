import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { fetchParagraphData } from '../config/api';

const CuttingEdge: React.FC = () => {
    const { isDark } = useTheme();
    const [bannerlink, setBannerLink] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchParagraphData();
            if (data?.bannerlink) {
                setBannerLink(data.bannerlink);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Text style={{ color: 'red' }}>C</Text>
                <Text style={{ color: isDark ? '#fff' : '#000' }}>utting</Text>
                <Text style={{ color: 'red' }}>E</Text>
                <Text style={{ color: isDark ? '#fff' : '#000' }}>dge</Text>
            </Text>
            
            {bannerlink ? (
                <Image source={{ uri: bannerlink }} style={styles.image} />
            ) : (
                <Text style={styles.placeholderText}></Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 },
    image: { width: '90%', height: 100, marginBottom: 16, borderRadius: 5 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, fontFamily: 'Times New Roman' },
    placeholderText: { fontSize: 16, color: 'gray', marginTop: 10 }
});

export default CuttingEdge;
