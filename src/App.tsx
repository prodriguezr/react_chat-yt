import {
  AuthProvider,
  FirestoreProvider,
  StorageProvider,
  useFirebaseApp,
} from 'reactfire';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { RootLayout } from './layouts';

const App = () => {
  const app = useFirebaseApp();
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);

  return (
    <FirestoreProvider sdk={db}>
      <StorageProvider sdk={storage}>
        <AuthProvider sdk={auth}>
          <RootLayout></RootLayout>
        </AuthProvider>
      </StorageProvider>
    </FirestoreProvider>
  );
};
export default App;
