import { StyleSheet, Text, View, FlatList, SafeAreaView, Image } from 'react-native';
import { useEffect, useState } from 'react';

const url = 'https://picsum.photos/v2/list?page=2&limit=100'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setData(data)
        console.log(data);
      }
      )
  }, []);

  const renderItem = ({ item, index }) => {
    const url = 'https://picsum.photos/300/300'
    return (
      <View >
        <Text>{item.author}</Text>
        <View>
          <Image source={{ uri: url }} style={styles.image} resizeMode={'cover'} />
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 300,
    width: '100%',
    alignSelf: 'center'
  },
});
