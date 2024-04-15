"use client"

import { useLoginContext } from "@/context/LoginContext";

const Tela2Screen = () => {
    const { user, dispath } = useLoginContext();
    return (
        <div>
            <h1> Pagina de Perfil </h1>
            <br />
            {user.name &&
                <>
                    Bem vindo = {user.name}
                </>
            }
            <br />
            <button className="py-2 px-5 m-2 rounded bg-green-500" onClick={()=>dispath({type:"SET_LOGOUT"})}>Logout</button>
        </div>
    );
};

export default Tela2Screen;

