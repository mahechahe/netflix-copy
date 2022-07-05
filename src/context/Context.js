import {createContext, useState} from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { auth } from '../firebase/firebase';
import {useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';

export const Context = createContext()

export const useContextGlobal = () => {

    const navigate = useNavigate()
    const [logged, setIsLogged] = useState(false)
    const [user, setUser] = useState({})

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setIsLogged(true)
            toast.success('Usuario loggeado correctamente')
            navigate("/browse");
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLogged(false)
        });
    }

    const logOut = () => {
        signOut(auth)
        setIsLogged(false)
        navigate('/')
    }
    
    const registerUsers = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setIsLogged(true)
            toast.success('Usuario registrado correctamente')
            navigate("/browse");
        })
        .catch((error) => {
            toast.error(error.message)
            setIsLogged(false)
        });
    }

    const loginWhitGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => {
                setIsLogged(true)
                toast.success('Usuario registrado correctamente')
                navigate("/browse");
            }).catch(error => {
                console.log(error.message);
            })
    }

    return {
        loginUser,
        registerUsers,
        logged,
        logOut,
        loginWhitGoogle,
        setUser,
        user
    }
}