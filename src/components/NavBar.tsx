export function NavBarComponents(){
    return(
        <>
            <div className="bg-green-800 itens-center justify-between flex w-full h-[50px] p-2">
                <div className="text-white text-xl  font-black">Galaxy Rick</div>
                <div>
                <ul className="flex gap-6 text-white font-medium">
                    <li>História</li>
                    <li>Versus</li>
                    <li>Morty</li>
                    <li>Blog</li>
                    <button className="w-[80px] border-2 rounded-xl cursor-pointer">Entrar</button>
                    <button className="bg-blue-500 w-[93px] h-8 text-white font-black border-2 rounded-xl cursor-pointer">Cadastrar</button>
                </ul>
                </div>
            </div>
        </>
    )
}