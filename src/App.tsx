import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const data = {
  name: "Nabadeep Kr. Das",
   
  email: "nabadeepdas069@gmail.com",
  intro: "Hey! I'm a pre-final year software engineering student at Central Institute of Technology. I'd love to chat — feel free to contact me at any of my socials below !",
  work: "SWE intern at @Tax-Hummer",
  apprenticeship: "Apprenticeship at Walmart Global Tech",
  socials: {
    github: "https://github.com/NABADEEP069",
    linkedin: "https://www.linkedin.com/in/nabadeep-kr-das/",
    twitter: "https://x.com/NabadeepDas069",
  },
};

function PrettyView() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 sm:p-8 font-mono">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-cyan-400 text-lg sm:text-x">about</h2>
          <p className="text-gray-300 text-sm sm:text-base whitespace-pre-wrap">{data.intro}</p>
        </div>

        

        <div className="space-y-4">
          <h2 className="text-cyan-400 text-lg sm:text-xl">work</h2>
          <p className="text-gray-300 text-sm sm:text-base">{data.work}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-cyan-400 text-lg sm:text-xl">contact</h2>
          <p className="text-gray-300 text-sm sm:text-base">{data.email}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-cyan-400 text-lg sm:text-xl">Projects</h2>
          <div className="space-y-2">
            <a href="https://boogymen.netlify.app/" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">Boogymen</a>
            <a  href="https://aquafineai.netlify.app/" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">Aquafine AI</a>
            <a href="https://nabadeep069.github.io/Project--Whiplash-Techfest/" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">Project--Whiplash (pc version)</a>
            <a  href="https://northeastdroneservices.in/" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">NORTH EAST DRONE SERVICES</a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-cyan-400 text-lg sm:text-xl">socials</h2>
          <div className="space-y-2">
            <a href="https://github.com/NABADEEP069" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">github</a>
            <a href="https://www.linkedin.com/in/nabadeep-kr-das/" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">linkedin</a>
            <a href="https://x.com/NabadeepDas069" className="block text-blue-400 hover:text-blue-300 text-sm sm:text-base">twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function JsonView() {
  return (
    <div className="min-h-screen bg-gray-800  pt-16 sm:pt-20 px-2 sm:px-6 font-mono">
      <div className="max-w-4xl mx-auto bg-gray-800 p-3 sm:p-6 rounded-lg ">
        <pre className="overflow-auto text-gray-300 text-xs sm:text-sm md:text-base">
          <code>{JSON.stringify(data, null, 3)}</code>
        </pre>
      </div>
    </div>
  );
}


function Layout() {
  const location = useLocation();
  const isJsonView = location.pathname === '/json';

  return (
    <div>
      <nav className="fixed top-1 left-5 sm:top-6 sm:left-6">
        <Link
          to={isJsonView ? '/' : '/json'}
          className="inline-flex items-center gap-2 text-gray-300 hover:text-gray-300 font-mono text-sm sm:text-base"
        >
          pretty-print {isJsonView ? '☐' : '☑'}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<PrettyView />} />
        <Route path="/json" element={<JsonView />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
