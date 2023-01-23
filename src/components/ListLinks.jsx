import { useEffect, useState } from "react";
import Box from "./Box"
import { api } from "../lib/axios";

export function ListLinks() {
    const [links, setLinks] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        api({
            method: 'post',
            headers: { 'Authorization': `Bearer ${import.meta.env.VITE_TOKEN_API}` },
            data: { 'query': `query Links {links {id url name}}` }
        })
            .then((response) => { setLinks(response.data.data.links.reverse()) })
            .catch((error) => { setError(true) })
    }, [])

    return (
        <>
            
            {
                error
                ? (
                    <div className="flex flex-col gap-y-6 w-full items-center my-10 dark">
                        <span className="text-red-600 text-center">OPS! Ocorreu um erro durante o carregamento dos links, tente novamente mais tarde</span>
                    </div>
                ) 
                : (
                    <>
                    
                        <div className="mt-6 flex gap-6 text-white">
                            
                        </div>
                        <div className="flex flex-col gap-y-6 w-full items-center my-10 dark">
                            {
                                links.map((link) => {
                                    return <Box name={link.name} url={link.url} key={link.id} />
                                })
                            }
                            {/* <iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/playlist/8766728482" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe> */}
                        </div>
                    </>
                )
            }
        </>
    )
}