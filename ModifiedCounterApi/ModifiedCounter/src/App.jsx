import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [email, setEmail] = useState('milindkrishna1998@gmail.com')
  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(true)
  const [userid, setuserid] = useState(1)

  const inputfnc = (e) => {
     setEmail(e.target.value)
  }

  const ontogglefnc = () => {
    setToggle(!toggle)
  }

  const addfnc = () => {
    setCount(prevCount => prevCount + 1)
  }

  const subfnc = () => {
    setCount(prevCount => (prevCount > 0) ? (prevCount - 1):0 )
  }

  const adduserid = () => {
      setuserid(prevCount => prevCount + 1)
  }


  const subuserid = () => {
    setuserid(prevCount => (prevCount > 1) ? (prevCount - 1) : 1)
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userid}`
        const response = await fetch(url)
        
        const data = await response.json()
        console.log(data)
        setData(data)
      } catch (error) {
        console.error(error.message) // Log the error message
      }
    }
  
    fetchdata()
  }, [userid])

  return (
    <>

      <h1 className="text-3xl font-bold text-center p-10 ">
      Counter API
      </h1>

    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={ontogglefnc}>
        Click to Toggle
        
    </button>
    {toggle && (
          <ul>
            <li>Milind krishna</li>
            <li>Raj krishna</li>
            <li>Soumili Ghosh</li>
          </ul>
    )}

    <input type="text" value={email} onChange={inputfnc} />
    <p>Email Id : {email}</p>


    <p>Live Count is : {count}</p>

    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={addfnc}>Add Count</button>

    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={subfnc}>Decrese Count</button>

    <p>Live UserId is : {userid} </p>

    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={adduserid}>Add userId</button>

    <button  className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={subuserid}>Decrese userId</button>

    {
      data.map((user) => {
        return(
          <ul key={user.id}>
          <li>{user.title}</li>
        </ul>
        )
        
      })
    }
    </>
  )
}

export default App
