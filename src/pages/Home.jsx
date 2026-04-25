import React from 'react'

const Home = () => {
  return (
    <div className='mai'>
     <div className="fs1">
      <h1 className='n1'> Caleb </h1>
       <h1 className='n1'>Ideraoluwa </h1>
       <h1 className='n2'> Frontend developer crafting responsive, high-performance web apps with React and modern JavaScript. </h1>
       <h1 className='n2'>I don’t just build websites—I create experiences people enjoy using. </h1>
       <ul className='skills'>
        <li>Focused on clean UI, smooth animations, and real-world usability.</li>
        <li>Currently building projects and leveling up my frontend skills.</li>
        <li>Based in Nigeria, open to internships and collaborations.</li>
       </ul>
       <button>
        <a href="https://derzzy.vercel.app/projects "className="gt">View Projects </a>
       </button>
       <button>
        <a href="https://derzzy.vercel.app/contacts"className="gt">Contact me</a>
       </button>
     </div>
     <div className="fs2">
      <img src="/images/Snapchat-2021848168.jpg" alt="" className="img1"  />
     </div>
    </div>
  )
}

export default Home