import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
// icons
import { Feather } from '@expo/vector-icons';
// Colors
import { Colors } from '@/constants/Colors';

const SearchInput = () => {
   // handle search
   const [search, setSearch] = useState('');
   const handleSearchChange = (text: string) => setSearch(text);
   const resetSearch = () => setSearch('');
   return (
      <View style={[styles.container, {backgroundColor: Colors.surface}]}>
         <TouchableOpacity style={styles.icon}>
            <Feather name="search" size={24} color={Colors.text} />
         </TouchableOpacity>

         <TextInput
            style={[styles.searchInput, {color: Colors.text}]}
            placeholder='Search'
            value={search}
            onChangeText={handleSearchChange}
         />

         {search !== ''
            ? (
               <TouchableOpacity style={styles.xIcon} onPress={resetSearch}>
                  <Feather name="x-circle" size={20} color={Colors.text} />
               </TouchableOpacity>
            )
            : null}
      </View>
   )
}

export default SearchInput

const styles = StyleSheet.create({
   container: {
      height: 45,
      width: '97%',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      marginVertical: 10
   },
   icon: {
      height: 30,
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      // borderWidth: 1
   },
   xIcon: {
      height: 30,
      width: '10%',
      // borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   searchInput: {
      height: '100%',
      width: '80%',
      alignSelf: 'center'
   },
})