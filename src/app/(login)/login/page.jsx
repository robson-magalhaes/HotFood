"use client"

import { useLoginContext } from "@/context/LoginContext";
import { useRouter } from "next/navigation";
import * as C from './styled'

function LoginPage() {
  const rota = useRouter();
  const { user, dispath } = useLoginContext();
  
  const handleLogin = () => {
    dispath({
       type: "SET_TOKEN", 
       payload: { token: 'Esta lodadoo agora' } 
      });
    rota.push('/');
  }
  return (
    <C.Container>
      <h1>Pagina de Login</h1>
      <br />
      <button onClick={handleLogin} className="bg-blue-500 py-2 px-5 rounded">Fazer Login</button>
      <br />
      <button onClick={() => rota.push('/')}> ...Voltar</button>
    </C.Container>
  );
}

export default LoginPage;
