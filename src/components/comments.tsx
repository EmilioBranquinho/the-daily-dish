'use client'

import { db } from "@/services/firebaseConnection";
import { addDoc, collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { Calendar, MessageSquareMore, MessageSquareX, Send, Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface CommentProps{
    id: string
    comment: string,
    postSlug?: string | null,
    username?: string | null,
    useremail?: string | null,
    userPicture?: string | null,
    createdAt: Date | string
}

interface PostSlugProps{
    slug: string
}

export function Comments({ slug }: PostSlugProps){

    const[visible, setVisible] = useState(false); 
    const { data: session } = useSession();
    const[input, setInput] = useState("");
    const[comments, setComments] = useState<CommentProps[]>([]);

    useEffect(()=>{
        handleGetComment();
    })

async function handleGetComment(){
    
    const commentsRef = collection(db, "comments");
    const q = query(commentsRef, orderBy("createdAt", "desc"), where("postSlug", "==", slug))

    const snapshotComments = await getDocs(q)

    let allComments = [] as CommentProps[];

        snapshotComments.forEach((doc)=>{
            const commentDate = doc.data()?.createdAt?.seconds * 1000;
            allComments.push({
                id: doc.id,
                comment: doc.data().comment,
                username: doc.data().username,
                useremail: doc.data().useremail,
                userPicture: doc.data().userPicture,
                createdAt: new Date(commentDate).toLocaleString()
            })
        })

        setComments(allComments)
}

async function handleAddComment(){
    
    if(input === ""){
        console.error("Preencha o campo");
        return;
    }

    try{
        const docRef = await addDoc(collection(db, "comments"), {
            comment: input,
            postSlug: slug,
            username: session?.user?.name,
            useremail: session?.user?.email,
            userPicture: session?.user?.image,
            createdAt: new Date()
        });

        const data = {
            id: docRef.id,
            comment: input,
            postSlug: slug,
            username: session?.user?.name,
            useremail: session?.user?.email,
            userPicture: session?.user?.image,
            createdAt: new Date()
        } 
    
    // setComments((oldItem)=>[...oldItem, data])  
        
    console.log("Comentário adicionado");
    setInput("");
        
    } catch (error){
        console.log(error)
    }
    
};

    return(
        <>
    <div className="flex items-center justify-center">
        <button onClick={()=>{setVisible(!visible)}} className="bg-accent w-full lg:mx-[500px] mx-20 h-10 rounded-sm cursor-pointer">{!visible? "ver comentários": "Ocultar comentários"}</button>
    </div>
    {visible &&(
                <section className="bg-white h-screen w-full overflow-y-auto mt-10 ">
            <h1 className="text-left mx-5 lg:text-xl font-bold pt-5 flex items-center gap-2 text-gray-500"><i><MessageSquareMore color="gray"/></i>comentários</h1>
        <div className="flex lg:ml-20  items-center gap-3 lg:gap-3 mt-3 mx-4 lg:mx-0">
            <textarea
            className="w-full lg:w-3xl border border-gray-300 rounded-sm indent-2 min-h-20"
            value={input}
            onChange={(e)=>{setInput(e.target.value)}}
            placeholder="Escreva um comentário"
            />
            <button className="cursor-pointer bg-accent w-10 h-10 rounded flex items-center justify-center" onClick={handleAddComment}><i><Send color="white"/></i></button>
        </div>
                <div className="flex flex-col items-center mx-5 lg:mx-40">
                    {comments.length < 1 &&(
                    <div className="mt-30 flex flex-col items-center">
                        <i><MessageSquareX size={100} color="gray"/></i>
                        <h1>Sem comentários</h1>
                    </div>
                    )}
                {comments && comments.map((comment)=>(
                    <div key={comment.id} className="mt-5 border border-gray-300 rounded-md w-full min-h-20 flex flex-col justify-center gap-2 px-3 lg:px-10">
                       <div className="flex gap-1 w-full">
                        <div>
                            {comment.useremail === session?.user?.email ?(
                              <img className="rounded-full" src={`${session?.user?.image}`} width={50}height={50} alt="sldkd" />   
                            ) : (
                            <img className="rounded-full" src={`${comment.userPicture}`} width={50}height={50} alt="sldkd" />
                            )} 
                        </div>
                        <div className="flex flex-col w-full">
                        <div className="flex items-center"> 
                        <span className="bg-gray-600 text-white w-auto flex items-center justify-center rounded-sm p-1 text-sm">
                        {comment.username}
                        </span>
                        </div>
                        <span className="whitespace-pre-wrap">{comment.comment}</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs text-gray-600 flex items-center">
                              <i><Calendar size={10}/></i>{comment.createdAt.toLocaleString("pt-Br", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                              }).slice(0,10)}
                            </span>  
                            {comment.useremail === session?.user?.email &&(
                            <button className="cursor-pointer">
                            <i><Trash2 color="red"/></i>
                            </button>
                            )}           
                        </div>
                        </div>
                    </div>
                 ))}
                </div>
        </section>
    )}
        </>
    )
}