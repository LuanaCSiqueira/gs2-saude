export default function Form() {
    return (
        <div>
        <div className="flex items-center justify-center mt-10">                    
            <form className="w-full flex justify-center">
            <textarea
                id="message"
                rows={4}
                className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Escreva sua mensagem..."
                style={{width: "50%"}}
                ></textarea>                
            </form>            
        </div>      
        <div className="w-full flex justify-center mt-4">
            <button type="button" style={{width: "50%"}} className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Enviar Mensagem</button>
        </div>        
        </div>
    )
}
