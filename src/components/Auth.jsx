import "./auth.scss";

import { auth, provider } from "../firebase-config";

import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Auth(props) {
    const { setIsAuth } = props;

    async function signIn() {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("user-token", result.user.accessToken);
            setIsAuth(true);
        }
        catch(err) {
            console.log(err);
        }
    }

    return (
        <div className="auth">
            <label>
                Sign in with{" "}
                {google.map((g,i) => {
                    return <span key={i} style={{ color: g.color }}>{g.letter}</span>;
                })}
            </label>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}

const google = [
    {
        letter: "G",
        color: "#4285F4",
    },
    {
        letter: "o",
        color: "#EA4335",
    },
    {
        letter: "o",
        color: "#FBBC05",
    },
    {
        letter: "g",
        color: "#4285F4",
    },
    {
        letter: "l",
        color: "#34A853",
    },
    {
        letter: "e",
        color: "#EA4335",
    },
];

// import "./auth.scss"

// import { auth, provider } from "../firebase-config"
// import { signInWithPopup } from "firebase/auth";

// import Cookies from "universal-cookie";
// const cookies = new Cookies();

// export default function Auth(props) {
//     const { setIsAuth } = props;

//     async function signInWithGoogle() {
//         try {
//             const result = await signInWithPopup(auth, provider);
//             cookies.set("auth-token", result.user.refreshToken);
//             setIsAuth(true);
//         }
//         catch(err) {
//             console.log(err);
//         }
//     }
//     return (
//         <div className="auth">
//             <p>Sign in with Google to continue</p>
//             <button onClick={signInWithGoogle}>
//                 Sign in with Google
//             </button>
//         </div>
//     );
// }
