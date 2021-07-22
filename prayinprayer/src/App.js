import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
        // <EasybaseProvider ebconfig={ebconfig}>
        //   <Router />
        // </EasybaseProvider>

import AppWithRouterAccess from './AppWithRouterAccess';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useState, useEffect } from 'react';
import ebconfig from './ebconfig';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <AppWithRouterAccess/>
        </Router>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there
          Edit oh my....finally...<code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


// function Router() {
//   const { isUserSignedIn, signOut } = useEasybase();

//   return (
//     isUserSignedIn() ?
//       <View style={styles.container}>
//         <Text>Congrats! You're signed in.</Text>
//         <Button title="Sign Out" onPress={signOut} />
//       </View>
//       :
//       <Account />
//   )
// }

function Account() {
  const [userVal, setUserVal] = useState("");
  const [passVal, setPassVal] = useState("");

  const { signIn, signUp } = useEasybase();

  const clearInputs = () => {
    setUserVal("");
    setPassVal("");
  }

  const handleSignInPress = async () => {
    await signIn(userVal, passVal);
    clearInputs();
  }

  const handleSignUpPress = async () => {
    console.log("WHAT IS MY USERVAL " + userVal)
    const res = await signUp(userVal, passVal, {
      created_at: new Date().toString
    });
    console.log(res);
    if (res.success) {
      console.log("SIGNING IN...");
      await signIn(userVal, passVal);
    }
    clearInputs();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React-flix!</Text>
      <TextInput value={userVal} onChangeText={e => setUserVal(e)} style={styles.accountInput} placeholder="Username" />
      <TextInput value={passVal} onChangeText={e => setPassVal(e)} style={styles.accountInput} placeholder="Password"/>
      <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
        <Button title="Sign In" onPress={handleSignInPress} />
        <Button title="Sign Up" onPress={handleSignUpPress} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accountInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: "75%",
    margin: 10,
    fontSize: 22,
    textAlign: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    fontStyle: "italic",
    marginBottom: 30
  }
});

export default App;
