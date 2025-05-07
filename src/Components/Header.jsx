import { Home, UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-25 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-bold text-xl">
                         housemove
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        
                         </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><a className="font-semibold">Buy</a></li>
                        <li><a className="font-semibold">Rent</a></li>
                        <li><a className="font-semibold">House Price</a></li>
                        <li><a className="font-semibold">Find Agent</a></li>
                        <li><a className="font-semibold">Commercial</a></li>
                        <li><a className="font-semibold">Inspire</a></li>
                        <li><a className="font-semibold">Overseas</a></li>
                    </ul>

                </div>
                <div className="navbar-end ">
                    <a className="btn gap-2 rounded-lg border-2 border-green-300 hover:bg-green-300">
                        < UserIcon className="h-5 w-5" />
                        Sign In
                    </a>
                </div>
            </div>

        </>
    );
}