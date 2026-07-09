import './App.css';

function App() {
  return (
    //i need co comment this code.
  <body className=" bg-neutral-50 font-sans">
    <div className="grid max-w-4xl mx-auto p-8">
      <a href='https://github.com/GOMAA0001' target='_blank' className='bg-white rounded h-full text-gray-950 no-underline shadow-md'>
        <h1 className=' text-2xl p-8'>Quercus robur</h1>
        <img className='w-full block rounded-b' src={require("./img/placeholder.png")} alt="Quercus robur"></img>
      </a>
      <a href='https://github.com/GOMAA0001' target='_blank' className='bg-white rounded h-full text-gray-950 no-underline shadow-md'>
        <h1 className=' text-2xl p-8'>Quercus pyrenaica</h1>
        <img className='w-full block rounded-b' src={require("./img/placeholder.png")} alt="Quercus pyrenaica"></img>
      </a>
      <a href='https://github.com/GOMAA0001' target='_blank' className='bg-white rounded h-full text-gray-950 no-underline shadow-md'>
        <h1 className=' text-2xl p-8'>Quercus faginea</h1>
        <img className='w-full block rounded-b' src={require("./img/placeholder.png")} alt="Quercus faginea"></img>
      </a>
      <a href='https://github.com/GOMAA0001' target='_blank' className='bg-white rounded h-full text-gray-950 no-underline shadow-md'>
        <h1 className=' text-2xl p-8'>Quercus ilex</h1>
        <img className='w-full block rounded-b' src={require("./img/placeholder.png")} alt="Quercus ilex"></img>
      </a>
      <a href='https://github.com/GOMAA0001' target='_blank' className='bg-white rounded h-full text-gray-950 no-underline shadow-md'>
        <h1 className=' text-2xl p-8'>Quercus suber</h1>
        <img className='w-full block rounded-b' src={require("./img/placeholder.png")} alt="Quercus suber"></img>
      </a>
    </div>
  </body>
  );
}

export default App;
