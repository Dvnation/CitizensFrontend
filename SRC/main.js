import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import { Button, ScrollViewComponent, Text, TextInput, View } from "react-native"
import { Picker } from "react-native-web"
import * as Location from "expo-location"


export function Main(){
const[description,setDesctription] = useState(null)
const [location,setLocation] = useState()
const [category,setCategory] = useState()
const [email,setEmail] = useState()
const [selectedValue, setSelectedValue] = useState("");
const [errorMsg, setErrorMsg] = useState(null);

const url = `http://localhost:4000`



useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc);
    })();
  }, []);

  let texter = 'Waiting..';
  if (errorMsg) {
    texter = errorMsg;
  } else if (location) {
    console.log(location.coords.latitude);
    texter = JSON.stringify(location);
  }




const handleReport = ()=>{

    fetch(`${url}/auth/report`, {method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({
        email:email,location:location,description:description,category:category
    })})
    .then(res=>{
        if(res.ok){
            return res.json()
        }
        else{
            return console.log("failed");
        }
    })

    .then(data=>{
        console.log(data);
        setCategory("")
            setDesctription("")
        setEmail("")
        setLocation("")
    })
    .catch(err=>{
        console.log("error",err);
    })
}


    return (
        <View style={{ padding: 20 }}>
            
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
            placeholder="Your Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
         
         <Text style={styles.label}>Select a category:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Accident" value="Accident" />
        <Picker.Item label="Fighting" value="Fighting" />
        <Picker.Item label="Armed Robbery" value="Armed Robbery" />
        <Picker.Item label="Kidnapping" value="Kidnapping" />
        <Picker.Item label="Others" value="Others" />


      </Picker>

     
           <TextInput
            style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
            placeholder="description"
            value={description}
            onChangeText={setDesctription}
            autoCapitalize="none"
          />
          <View >
          <TextInput
            style={{ height: 100, borderColor: 'gray', borderWidth: 1, marginBottom: 12 }}
            placeholder="location"
            value={texter}
            editable={false}
            onChangeText={setLocation}
            autoCapitalize="none"
          />
          </View>
          

     <Button title="Report" onPress={handleReport} />
        </View>
      );
    };
    

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          padding: 20,
        },
        label: {
          fontSize: 18,
          marginBottom: 10,
        },
        picker: {
          height: 40,
          width: 100,
          marginBottom:10
        },
      });
      