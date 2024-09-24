


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Citizens Reporting Solution</Text>
      </View>

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Welcome to the App!</Text>
        <Text style={styles.subText}>Report incidents and see reports from others.</Text>
      </View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate('Report Page')}>
          <Text style={styles.featureText}>Report Incident</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate('View Reports')}>
          <Text style={styles.featureText}>View Reports</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.featureCard} onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.featureText}>Profile</Text>
        </TouchableOpacity> */}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Empowering Citizens for a Safer Community</Text>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f7f7f7',
      padding: 20,
    },
    header: {
      backgroundColor: '#4CAF50',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    headerText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    welcomeSection: {
      marginBottom: 30,
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#333',
    },
    subText: {
      fontSize: 16,
      color: '#666',
      marginTop: 10,
    },
    featuresContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    featureCard: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 20,
      width: '45%',
      alignItems: 'center',
      marginBottom: 20,
      elevation: 5,
    },
    featureText: {
      marginTop: 10,
      fontSize: 16,
      color: '#333',
      fontWeight: '600',
      textAlign: 'center',
    },
    icon: {
      width: 50,
      height: 50,
      resizeMode: 'contain',
    },
    footer: {
      marginTop: 20,
      alignItems: 'center',
    },
    footerText: {
      fontSize: 16,
      color: '#888',
    },
  });
  