import React from "react";

export default function Footer(){
    return(
        <div className="mx-auto max-w-[1640px] h-[400px] rounded-lg mb-5 bg-orange-500">
            <div className="grid grid-cols-3 gap-2 p-12">
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Horário de Funcionamento</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Venha nos visitar</h1>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white text-2xl font-bold">Faça seu cadastro</h1>
                </div>
            </div>
        </div>
    )
}