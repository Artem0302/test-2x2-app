import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
} from 'firebase/firestore';
import React, {
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import {Alert} from 'react-native';
import {initializeApp} from 'firebase/app';
import {getCurrentDateFormatted} from '@shared/helpers';
import {INews} from '@shared/types';
import {firebaseConfig} from './model/firebase-config';

interface IAddnews {
  link: string;
  text: string;
  img_url: string;
  title: string;
}

interface INewsContext {
  news: INews[];
  getNews: (setLoading?: Dispatch<React.SetStateAction<boolean>>) => void;
  deleteNews: (id: string) => Promise<void>;
  addnews: ({link, text, img_url, title}: IAddnews) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const newsContext = React.createContext<INewsContext>(undefined!);

interface IFirebaseProvider {
  children: ReactNode;
}

export function FirebaseProvider(props: IFirebaseProvider) {
  const [news, setNews] = useState<INews[]>([]);

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const getNews = async (
    setLoading?: Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      setLoading && setLoading(true);

      const newsCollection = collection(db, 'news');

      const snapshot = await getDocs(newsCollection);
      const newsArr: INews[] = [];

      snapshot.docs.forEach(document => {
        newsArr.push({...document.data(), id: document.id} as INews);
      });

      setNews(newsArr);
    } catch (e) {
      Alert.alert('Ooops...', 'Fail to load news. Try again!');
    } finally {
      setLoading && setLoading(false);
    }
  };

  const deleteNews = async (id: string) => {
    try {
      const docRef = doc(db, 'news', id);

      await deleteDoc(docRef);
    } catch (e) {
      Alert.alert('Ooops...', 'Fail to delete news. Try again!');
    }
  };

  const addnews = async ({link, text, img_url, title}: IAddnews) => {
    try {
      const newsCollection = collection(db, 'news');

      const newNews = {
        link,
        text,
        img_url,
        title,
        created_at: getCurrentDateFormatted(),
      };

      await addDoc(newsCollection, newNews).then(newData => {
        setNews(previousData => [
          ...previousData,
          {...newNews, id: newData.id},
        ]);
      });
    } catch (e) {
      Alert.alert('Ooops...', 'Fail to add news. Try again!');
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <newsContext.Provider value={{news, getNews, deleteNews, addnews}}>
      {props.children}
    </newsContext.Provider>
  );
}

export const useNews = () => useContext(newsContext);
