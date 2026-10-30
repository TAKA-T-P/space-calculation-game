// 授業チャレンジ「オンライン集計」で使う Firebase Web アプリの設定
//
// Firebaseコンソール > プロジェクトの設定 > 全般 > マイアプリ（ウェブアプリ）の
// 「SDK の設定と構成」に表示される値をそのまま貼り付けてください。
//
// ※ これらの値はWebページに公開される前提の識別情報で、秘密鍵ではありません。
//   データへのアクセス制御は firestore.rules（Firestore セキュリティルール）で行います。
//   管理者用の秘密鍵（サービスアカウントのJSON）は絶対にここに書かないでください。
//
// apiKey と appId が空のあいだは、オンライン集計は使えません（オフライン集計はこれまでどおり使えます）。
window.SPACE_FIREBASE_CONFIG = {
    apiKey: 'AIzaSyBrKB-K3kvJrlycclYbbKEtD4CIrz_YMpM',
    authDomain: 'space-calculation-game.firebaseapp.com',
    projectId: 'space-calculation-game',
    storageBucket: 'space-calculation-game.firebasestorage.app',
    messagingSenderId: '239516283102',
    appId: '1:239516283102:web:8713ef056c2ef55fb0124f'
};
