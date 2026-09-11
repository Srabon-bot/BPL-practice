import { FaDollarSign } from "react-icons/fa";
import Logo from "../assets/logo.png";

interface NavProps {
    coins: number;
}

const Nav = ({ coins }: NavProps) => {
    const links = ["Home", "Fixture", "Players", "Schedule"];

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                
                {/* Logo */}
                <img
                    src={Logo}
                    alt="Logo"
                    className="h-10 w-auto object-contain"
                />

                {/* Right side */}
                <div className="flex items-center gap-10">
                    
                    {/* Navigation Links */}
                    <ul className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
                        {links.map((link) => (
                            <li key={link}>
                                <a
                                    href="#"
                                    className="
                                        relative py-2
                                        transition-colors duration-200
                                        hover:text-emerald-600
                                        after:absolute
                                        after:bottom-0
                                        after:left-0
                                        after:h-0.5
                                        after:w-0
                                        after:bg-emerald-500
                                        after:transition-all
                                        after:duration-300
                                        hover:after:w-full
                                    "
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Coins */}
                    <div
                        className="
                            flex items-center gap-1.5
                            rounded-full
                            border border-emerald-200
                            bg-emerald-50
                            px-4 py-1.5
                            text-sm font-bold
                            text-emerald-600
                        "
                    >
                        <FaDollarSign />
                        <span>{coins}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;