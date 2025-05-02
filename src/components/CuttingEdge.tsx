import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const CuttingEdge: React.FC = () => {
    const { isDark } = useTheme();
    const [bannerlink, setBannerLink] = useState('');
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://spincobackend.vercel.app/paragraph');
                const data = await response.json();
                if (data?.bannerlink) setBannerLink(data.bannerlink);
                if (data?.paragraph) setParagraph(data.paragraph);
            } catch (error) {
                console.error('Error fetching paragraph data:', error);
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

            {paragraph ? (
                <Text style={[styles.paragraph, { color: isDark ? '#fff' : '#000' }]}>
                    {paragraph}
                </Text>
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
    placeholderText: { fontSize: 16, color: 'gray', marginTop: 10 },
    paragraph: { fontSize: 16, textAlign: 'center', marginBottom: 16 },
});

export default CuttingEdge;
