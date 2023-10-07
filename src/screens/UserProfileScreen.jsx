import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

function UserProfileScreen() {
  const [userData, setUserData] = useState({
    userName: 'Shameer',
    age: '30',
    gender: 'Male',
    email: 'shameer@inab.com',
    profileImage: null,
  });

  const [editMode, setEditMode] = useState(false);

  const handleUserDataChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.profileContainer, { padding: editMode ? 25 : 50 }]}>
        <TouchableOpacity onPress={() => ({})}>
          <Image
            source={
              userData.profileImage
                ? { uri: userData.profileImage }
                : require('../../assets/icon.png')
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>

        {editMode ? (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              value={userData.userName}
              onChangeText={(text) => handleUserDataChange('userName', text)}
            />

            <Text style={styles.label}>Age</Text>
            <TextInput
              style={styles.input}
              value={userData.age}
              onChangeText={(text) => handleUserDataChange('age', text)}
              keyboardType="numeric"
            />

            <Text style={styles.label}>Gender</Text>
            <TextInput
              style={styles.input}
              value={userData.gender}
              onChangeText={(text) => handleUserDataChange('gender', text)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={userData.email}
              onChangeText={(text) => handleUserDataChange('email', text)}
              keyboardType="email-address"
            />
          </View>
        ) : (
          <View>
            <Text style={styles.label}>Username:</Text>
            <Text style={styles.text}>{userData.userName}</Text>

            <Text style={styles.label}>Age:</Text>
            <Text style={styles.text}>{userData.age}</Text>

            <Text style={styles.label}>Gender:</Text>
            <Text style={styles.text}>{userData.gender}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.text}>{userData.email}</Text>
          </View>
        )}

        <TouchableOpacity
          style={[styles.editButton, editMode && styles.saveButton]}
          onPress={() => setEditMode(!editMode)}
        >
          <Text style={styles.buttonText}>{editMode ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    flexGrow: 1,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    width: 250,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  saveButton: {
    backgroundColor: 'green',
    paddingHorizontal: 36,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;
