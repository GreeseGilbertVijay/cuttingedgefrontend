import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, isDark, toggleTheme }) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.header, { backgroundColor: isDark ? '#2d2d2d' : '#f8f8f8' }]}>
      <Text style={styles.title}>
        <Text style={{ color: 'red' }}>C</Text>
        <Text style={{ color: isDark ? '#fff' : '#000' }}>utting</Text><Text style={{ color: 'red' }}>E</Text><Text style={{ color: isDark ? '#fff' : '#000' }}>dge</Text>
      </Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={toggleTheme} style={styles.iconSpacing}>
          <Ionicons name={isDark ? "sunny" : "moon"} size={24} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => (navigation as any).navigate('SendMail')}>
          <Ionicons name="mail" size={28} color={isDark ? '#fff' : '#000'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {position: 'absolute',top: 34,left: 0,right: 0,flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',paddingHorizontal: 20,height: 60, width: '100%',
  elevation: 4,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.1,shadowRadius: 4,zIndex: 1000,},
  title: {fontSize: 20,fontWeight: 'bold',fontFamily: 'Times New Roman',},
  rightIcons: {flexDirection: 'row',alignItems: 'center',},
  iconSpacing: {marginRight: 15,},
});

export default Header; 