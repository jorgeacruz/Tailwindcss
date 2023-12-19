import React from "react";
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

export default function Footer(){
    return(
        <div className="mx-auto max-w-[1640px] rounded-lg mb-5 bg-orange-500 dark:bg-black">
            <div className="grid lg:grid-cols-4 gap-2 p-12 md:grid-cols-2 sm:grid-cols-1">
                <div className="flex flex-col text-white">
                    <h1 className="text-2xl font-bold">Funcionamento</h1>
                    <h2 className="text-xl pt-4 font-bold">Restaurante</h2>
                    <p className="font-bold">Das 11:00 à 06:00</p>
                    <h2 className="text-xl pt-4 font-bold">Entrega</h2>
                    <p className="font-bold">Das 11:00 à 02:00</p>
                </div>
                <div className="flex flex-col text-white">
                    <h1 className="text-2xl font-bold">Venha nos visitar</h1>
                    <h2 className="text-xl pt-4 font-bold">Rua Esperança - 12</h2>
                    <p className="font-bold">Maré - Rio de Janeiro</p>
                    <span className="pt-4 flex flex-row text-white"><AiOutlinePhone size={24} color={'#fff'}/> (21) 9999-9999 </span>
                    <span className="py-1 flex flex-row text-white"><AiOutlineMail size={24} color={'#fff'}/> contato@</span>    
                   
                </div>
                <div className="flex flex-col text-white">
                    <h1 className="text-2xl font-bold">Faça seu cadastro</h1>
                    <p> Para receber novidades e promoções</p>
                    <form>
                        <div className="pt-2 flex flex-col w-2/3">
                            <input type="text" placeholder="Digite seu nome" className="text-center h-8 border border-white bg-transparent my-1 rounded-sm" />
                            <input type="text" placeholder="Digite seu email" className="text-center h-8 border border-white bg-transparent my-1 rounded-sm" />
                            <button className="mt-1 bg-white text-black rounded-sm border-none">
                                Fazer Cadastro
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center">
                    <img src="https://barechoperiaesperanca.com.br/wp-content/uploads/elementor/thumbs/LOGO-ESPERNCA-01-pb3dy1yboxvzka9pifcla9dzncvbbhnl9b76ubeuzg.png" alt="/"
                    className="w-1/2" />
                </div>
            </div>
        </div>
    )
}