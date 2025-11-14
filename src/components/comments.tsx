import { Calendar, MessageSquareMore, Trash2 } from "lucide-react";

export function Comments(){
    return(
        <section className="bg-white h-screen w-full overflow-y-auto mt-10 ">
            <h1 className="text-left mx-5 lg:text-2xl font-bold pt-5 flex items-center gap-2"><i><MessageSquareMore/></i>Comentários</h1>
                <div className="flex flex-col items-center mx-5 lg:mx-40">
                    <div className="mt-5 border border-gray-300 rounded-md w-full min-h-20 flex flex-col justify-center gap-2 px-3 lg:px-10">
                       <div className="flex gap-1 w-full">
                        <div>
                        <img className="rounded-full" alt="sldkd" />
                        </div>
                        <div className="flex flex-col w-full">
                        <div className="flex items-center"> 
                        <span className="bg-gray-600 text-white w-auto flex items-center justify-center rounded-sm p-1 text-sm">
                        Nelson Lopes
                        </span>
                        </div>
                        <span className="whitespace-pre-wrap">Gostei do artigo, muito bom Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quisquam at eum quam quaerat. Non similique natus veritatis doloremque necessitatibus eius adipisci. Dicta ullam fugiat quo quaerat et ab debitis.</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <span className="text-xs text-gray-600 flex items-center">
                              <i><Calendar size={10}/></i>18/10/2025
                            </span>             
                            <button className="cursor-pointer">
                            <i><Trash2 color="red"/></i>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}