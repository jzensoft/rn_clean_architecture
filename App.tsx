import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Photo} from './src/feature/data/model/Photo';
import {container} from './src/feature/di/InjectionContainer';
import {injecttionKey} from './src/feature/di/InjectionKey';
import {PhotoRepository} from './src/feature/domain/PhotoRepository';

function App(): React.JSX.Element {
  const photoRepsitory = container.get<PhotoRepository>(
    injecttionKey.PHOTO_REPOSITORY,
  );

  const [photos, setPhotos] = useState<Photo[]>([]);

  const getPhotos = async () => {
    const res = await photoRepsitory.getPhotos();
    setPhotos(res.data ?? []);
    if (!res.isSuccess) {
      Alert.alert('Error', res.error ?? '');
    }
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <FlatList
          data={photos}
          renderItem={item => (
            <View
              style={{flexDirection: 'column', padding: 10}}
              key={item.index}>
              <Text style={{fontSize: 18}}>{item.item.title ?? ''}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
