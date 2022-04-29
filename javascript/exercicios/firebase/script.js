const firebaseConfig = {
    apiKey: "AIzaSyD5ChsgBJmtqccQHsJYHUeqkMbSgBjDtH8",
    authDomain: "clone-da-netflix.firebaseapp.com",
    projectId: "clone-da-netflix",
    storageBucket: "clone-da-netflix.appspot.com",
    messagingSenderId: "218620877051",
    appId: "1:218620877051:web:92edd318dc91838f04f85e",
    measurementId: "G-NNHC92E3GR"
};
    firebase.initializeApp(firebaseConfig)
    let db = firebase.firestore()
    db.collection('TurmaA').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log(doc)
        })
    })
    

     