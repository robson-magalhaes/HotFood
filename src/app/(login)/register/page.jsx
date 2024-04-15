"use client"

import { useLoginContext } from "@/context/LoginContext";
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Pagina de Login</h1>
      TOKEN = {user.token} 
      <br />
      <button onClick={handleLogin} className="bg-blue-500 py-2 px-5 rounded">Login</button>
      <br />
      <button onClick={() => rota.push('/')}>Voltar</button>
    </div>
  );
}

export default LoginPage;
