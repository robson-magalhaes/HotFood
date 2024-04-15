"use client";

import { useRouter } from "next/navigation";
import { useLoginContext } from '@/context/LoginContext';
import { useEffect } from "react";

export const Page = ({ children }) => {
    const rota = useRouter();
    const { user, dispath } = useLoginContext();
    useEffect(() => {
        if (!user.token || user.token == '') {
            rota.push('/login');
        }
    }, [user]);

    return (
        <>
            {children}
        </>
    );
}
export default Page;