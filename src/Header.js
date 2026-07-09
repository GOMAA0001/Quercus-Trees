import './App.css';

function Header() {
  return (
    <header className=" bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a href="#">
          <span className="sr-only">Home</span>
          <img className=' w-14 rounded-xl' src={require("./img/placeholder.png")} alt="Quercus faginea"></img>
        </a>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" class="hidden md:block">
            <ul className="flex items-center gap-6 text-lg">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> About </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> History </a>
              </li>
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Projects </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;