import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';

import React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import globalStyle from '../../globalStyle';
import InabText from '../../components/InabText';

function BookList({ navigation }) {
  return (
    <SafeAreaView className="relative h-full pt-3 bg-tiger-lighter">
      <View className="rounded-b-[64px] h-[20%] bg-violet">
        {/* Title */}
        <View className="my-[30px]">
          <InabText size={24} weight="700" alignText="center">
            School Library
          </InabText>
        </View>

        {/* Search Input */}
        <View
          className="absolute bottom-[-30px] right-[5%] w-[90%] p-5 rounded-lg bg-violet-light"
          style={globalStyle.boxShadow}
        >
          <View className="flex flex-row items-center w-full p-1 border rounded-lg border-violet focus:border-violet-dark">
            <Ionicons size={20} name="search" />
            <TextInput
              className="transition-all bg-white"
              placeholder="Search book, author or titles"
            />
          </View>
        </View>
      </View>

      <ScrollView style={{ flex: 1 }} className="mt-[40px] p-[16px] mb-[100px]">
        <View className="mb-[16px]">
          <InabText fontColor="black" size={16} weight="700">
            Trending
          </InabText>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            horizontal
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('BookDetail')}
              className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center"
            >
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </TouchableOpacity>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>
          </ScrollView>
        </View>

        <View className="mb-[16px]">
          <InabText fontColor="black" size={16} weight="700">
            Trending
          </InabText>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            horizontal
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 16,
            }}
          >
            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>
          </ScrollView>
        </View>

        <View className="mb-[16px]">
          <InabText fontColor="black" size={16} weight="700">
            Trending
          </InabText>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            horizontal
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 16,
            }}
          >
            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>

            <View className="p-2 bg-violet-light w-[90px] rounded-lg flex flex-col items-center justify-center">
              <Image
                style={{
                  height: 90,
                  width: 60,
                  marginBottom: 8,
                }}
                source={{
                  uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1456894457i/8933944.jpg',
                }}
              />
              <InabText fontColor="black" size={12} weight="600">
                Harry Potter: The Prequel
              </InabText>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

BookList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: 16,
    alignItems: 'center',
  },
});
export default BookList;
