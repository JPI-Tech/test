import { View, Text, FlatList } from 'react-native'
import React from 'react'

const renderItem = ()=>{
    return(
        <View style={{backgroundColor: 'red',height: 40, width: 200}}>
            <Text>item</Text>
        </View>
    )
}

const ImageList = ({data}) => {
  return (
    <View>
    <FlatList
        data={data}
        renderItem={renderItem}
    />
    </View>
  )
}
// const styles = StyleSheet.create({
  
// });
export default ImageList