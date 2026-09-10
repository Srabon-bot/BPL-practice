import Logo from "../assets/logo.png";

const Nav = () => {
    return (
        <nav className="bg-blue-900">
            <div className="flex justify-between container mx-auto">
                <img src={Logo} alt="Logo" />
                <ul className="flex gap-4 items-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Players</li>
                    <li>Schedule</li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;