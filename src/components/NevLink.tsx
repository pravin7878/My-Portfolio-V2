export default function NavLink({ label, action }: { label: string, action: () => void; }) {
    return (
        <button className="border-transparent hover:border-pink-500 px-1 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-purple-500  to-pink-500  text-sm sm:text-xl md:text-2xl">
            <p className="font-bold px-2.5 py-1  rounded-full bg-[#121212]" onClick={action}>
                {label}
            </p>
        </button>
    )
}