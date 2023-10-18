
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/Firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

const handleGoogleSignIn = () =>{
  const auth = getAuth();
  signInWithPopup(auth,provider)
  .then(result=>{
    const user =result.user
    console.log(user)
  })
}

function App() {
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
    </div>
  );
}

export default App;
