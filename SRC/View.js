
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

export const DataFetchingComponent = () => {
  const [view, setview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = `http://localhost:4000`
  // Fetch data using useEffect
  useEffect(() => {
    const fetchData = async () => {
    
        fetch(`${url}/auth/users`, {
            method:"GET", headers:{"Content-Type": "application/json"}})
            .then(res=>{
                if (res.ok) {
                    return res.json()
                }
                else{
                    console.log("invalid request");
                }
            }).then(data=>
                
               {
                setview(data)
                console.log(data)
               })
    
       .catch (error=>{
        setError('Failed to fetch data');
      }) 
      .then(
        setLoading(false)
      )
     
    };

    fetchData();
  }, []); // Empty array means this effect runs only once when the component mounts.

  // Use useMemo to memoize the filtered or mapped data
  const mappedData = useMemo(() => {
    return view
        }, [view]); // Only recompute if `data` changes

  // Render loading or error messages
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
              <ScrollView>
s
      <Text style={styles.header}>Fetched Data</Text>
     {
     mappedData.map(item=>{
        if (item.reports!=="[]") {
            return(
                <View style={styles.card}>
<Text style={styles.text}>{`NAME: ${item.name}`}</Text>

<Text style={styles.text}>{`ID: ${item._id}`}</Text>
{item.reports.map(item=>{
                    return(
                        <>
                        <Text style={styles.text}>{`CATEGORY: ${item.category}`}</Text>
                        <Text style={styles.text}>{`DESCRIPTION: ${item.description}`}</Text>
                        <Text style={styles.text}>{`DATE: ${item.date}`}</Text>


                        </>

                    )
                })}
                
                </View >
            )
        }

     })
     }
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    marginTop: 5,
},
card: {
    backgroundColor: 'greenyellow',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
},
text:{
    alignSelf:"start",
    marginBottom:10,
    fontSize:20
}
});

