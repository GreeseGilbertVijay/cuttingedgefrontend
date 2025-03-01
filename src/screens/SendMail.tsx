import React, { useState } from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Modal, SafeAreaView, ActivityIndicator} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../context/ThemeContext';
import Header from '../components/Header';

type RootStackParamList = {
  SendMail: undefined;
  Main: undefined;
};

type SendMailScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SendMail'>;
};

interface EmailResponse {
  success: boolean;
  message?: string;
}

const SendMail: React.FC<SendMailScreenProps> = ({ navigation }) => {
  const [firstname, setFirstname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { isDark, toggleTheme } = useTheme();

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = async (): Promise<void> => {
    if (!firstname.trim() || !email.trim() || !message.trim()) {
      setModalMessage('Please fill in all fields');
      setIsSuccess(false);
      setModalVisible(true);
      return;
    }
  
    if (!isValidEmail(email)) {
      setModalMessage('Please enter a valid email address');
      setIsSuccess(false);
      setModalVisible(true);
      return;
    }
  
    setLoading(true);
    try {
      const response = await fetch('https://spincobackend.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstname, email, message }),
      });
  
      const data: EmailResponse = await response.json();
      
      if (data.success) {
        setModalMessage('Email sent successfully!');
        setIsSuccess(true);
        setModalVisible(true);
        setFirstname('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error(data.message || 'Failed to send email');
      }
    } catch (error) {
      setModalMessage('Failed to send email. Please try again.');
      setIsSuccess(false);
      setModalVisible(true);
    } finally {
      setLoading(false);
    }
  };
  

  const closeModal = () => {
    setModalVisible(false);
    if (isSuccess) {
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[
      styles.container, 
      { backgroundColor: isDark ? '#1a1a1a' : '#fff' }
    ]}>
      <Header 
        title="Send Mail" 
        isDark={isDark} 
        toggleTheme={toggleTheme}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={[
            styles.modalContent,
            { backgroundColor: isDark ? '#2d2d2d' : '#fff' }
          ]}>
            <Ionicons 
              name={isSuccess ? "checkmark-circle" : "alert-circle"} 
              size={50} 
              color={isSuccess ? "#4CAF50" : "#f44336"}
            />
            <Text style={[
              styles.modalText,
              { color: isDark ? '#fff' : '#000' }
            ]}>{modalMessage}</Text>
            <TouchableOpacity
              style={[styles.modalButton, { backgroundColor: isSuccess ? "#4CAF50" : "#f44336" }]}
              onPress={closeModal}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.formContainer}>
        <Text style={[
          styles.label,
          { color: isDark ? '#fff' : '#000' }
        ]}>Name</Text>
        <TextInput
          style={[styles.input,
            { 
              backgroundColor: isDark ? '#2d2d2d' : '#f9f9f9',
              borderColor: isDark ? '#444' : '#ddd',
              color: isDark ? '#fff' : '#000'
            }
          ]}
          value={firstname}
          onChangeText={setFirstname}
          placeholder="Enter Name"
          placeholderTextColor={isDark ? '#888' : '#666'}
        />

        <Text style={[styles.label,
          { 
            color: isDark ? '#fff' : '#000' }
        ]}>Email</Text>
        <TextInput
          style={[
            styles.input,
            { 
              backgroundColor: isDark ? '#2d2d2d' : '#f9f9f9',
              borderColor: isDark ? '#444' : '#ddd',
              color: isDark ? '#fff' : '#000'
            }
          ]}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter Email"
          placeholderTextColor={isDark ? '#888' : '#666'}
        />

        <Text style={[
          styles.label,
          { color: isDark ? '#fff' : '#000' }
        ]}>Message</Text>
        <TextInput
          style={[
            styles.input,
            styles.messageInput,
            { 
              backgroundColor: isDark ? '#2d2d2d' : '#f9f9f9',
              borderColor: isDark ? '#444' : '#ddd',
              color: isDark ? '#fff' : '#000'
            }
          ]}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
          placeholderTextColor={isDark ? '#888' : '#666'}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Send Email</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, },
  formContainer: { padding: 20, marginTop: 120, },
  label: {fontSize: 16,marginBottom: 5,fontWeight: '600',},
  input: {height: 40,borderWidth: 1,marginBottom: 15,paddingHorizontal: 10,borderRadius: 8,},
  messageInput: {height: 120,textAlignVertical: 'top',paddingTop: 10,},
  button: {backgroundColor: '#f2a45a',padding: 15,borderRadius: 8,alignItems: 'center',marginTop: 10,},
  buttonText: { color: '#fff',fontSize: 16,fontWeight: 'bold', },
  modalOverlay: {flex: 1,backgroundColor: 'rgba(0, 0, 0, 0.5)',justifyContent: 'center',alignItems: 'center',},
  modalContent: {width: '80%',padding: 20,borderRadius: 10,alignItems: 'center',elevation: 5,shadowColor: '#000',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.25,shadowRadius: 4,},
  modalText: {fontSize: 16,textAlign: 'center',marginVertical: 20,},
  modalButton: {paddingHorizontal: 30,paddingVertical: 10,borderRadius: 5,},
  modalButtonText: {color: '#fff',fontSize: 16,fontWeight: 'bold',},
});

export default SendMail; 