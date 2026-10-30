// 授業チャレンジのオンライン集計で使う Firebase の機能だけをまとめて window.SpaceFirebaseSDK に公開する。
// ビルド： cd tools/firebase-sdk && npm install && npm run build （lib/firebase-sdk.js が更新される）
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInAnonymously,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    collection,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    writeBatch,
    query,
    where,
    limit,
    serverTimestamp,
    Timestamp,
    getCountFromServer
} from 'firebase/firestore';

window.SpaceFirebaseSDK = {
    initializeApp,
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInAnonymously,
    signOut,
    onAuthStateChanged,
    getFirestore,
    doc,
    collection,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,
    writeBatch,
    query,
    where,
    limit,
    serverTimestamp,
    Timestamp,
    getCountFromServer
};
