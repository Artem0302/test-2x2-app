import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
  getFirestore,
} from 'firebase/firestore';
import React, {ReactNode, useContext, useEffect, useState} from 'react';

import {initializeApp} from 'firebase/app';
import {getCurrentDateFormatted} from '@shared/helpers';
import {INews} from '@shared/types';
import {firebaseConfig} from './model/firebase-config';

interface INewsContext {
  news: INews[];
  getNews: () => void;
  deleteNews: (id: string) => Promise<void>;
  addnews: ({link, text, img_url, title}: INews) => Promise<void>;
}

export const newsContext = React.createContext<INewsContext | null>(null);

interface IFirebaseProvider {
  children: ReactNode;
}

export function FirebaseProvider(props: IFirebaseProvider) {
  const [news, setNews] = useState<INews[]>([]);

  initializeApp(firebaseConfig);

  const db = getFirestore();

  const getNews = async () => {
    const newsCollection = collection(db, 'news');

    const snapshot = await getDocs(newsCollection);
    const newsArr: INews[] = [];

    snapshot.docs.forEach(document => {
      newsArr.push({...document.data(), id: document.id} as INews);
    });

    setNews(newsArr);
    // Alert.alert('Ooops...', 'Fail to load books. Try again!');
  };

  const deleteNews = async (id: string) => {
    const docRef = doc(db, 'news', id);

    return await deleteDoc(docRef);
  };

  const addnews = async ({link, text, img_url, title}: INews) => {
    const newsCollection = collection(db, 'news');

    const newNews = {
      link,
      text,
      img_url,
      title,
      created_at: getCurrentDateFormatted(),
    };

    return await addDoc(newsCollection, newNews).then(newData => {
      setNews(previousData => [...previousData, {...newNews, id: newData.id}]);
    });
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
