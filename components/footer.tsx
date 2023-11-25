
export default function Footer() {
    return (
<footer className="bg-white dark:bg-gray-900 mt-4">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Institucional</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">Sobre</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Chat</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Especialistas</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Informativos</a>
                </li>
            </ul>
        </div>            
      </div>
    </div>
</footer>
    )}
