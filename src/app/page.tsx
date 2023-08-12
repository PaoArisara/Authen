'use client';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { app, auth, db } from './firebase';
import { getAuth, getIdToken, onAuthStateChanged } from 'firebase/auth';


export default function Home() {


  //fetch userid
  const userinfo = auth
  onAuthStateChanged(userinfo, (user) => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log(displayName, email, photoURL, emailVerified, uid)
    }

  });

  // //fetch user project
  // useEffect(()=>{
  //   getUserProject();
  // },[])
  // const [userProject, setUserProject] = useState([])
  // const getUserProject = async () => {
  //   if (session) {
  //     const q = query(collection(db, "shops"), where("email", "==", session.data?.user?.email));
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       console.log(doc.id, " => ", doc.data());
  //     });

  //   }
  // }

  //fetch data from firestore
  const db = getFirestore(app)
  useEffect(()=>{
    getPost();
  },[])
  const getPost = async () => {
    const querySnapshot = await getDocs(collection(db, "shops"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  }
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });


  return (
    <div className="p-8">
      <div className='text-white'>{session?.data?.user?.email}</div>

      <button className='text-white' onClick={() => signOut()}>Logout</button>
    </div>

  )
}

Home.requireAuth = true

function idToken(value: string): string | PromiseLike<string> {
  throw new Error('Function not implemented.');
}
