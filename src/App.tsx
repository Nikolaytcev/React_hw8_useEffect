import { useEffect, useState } from 'react'
import './App.css'
import { Details, Idatails } from './Components/Details/Details';
import { Users } from './Components/Users/Users';

const url: string = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';


function App() {
  const [userId, setUserId] = useState(0)
  const [user, setUser] = useState<Idatails>({id: 0, name: '', avatar: '', details: {city: '', company: '', position: ''}})
  const [users, setUsers] = useState<{id: number, name: string}[]>([])
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false)

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    setUserId(Number(e.currentTarget.id))
  }


  useEffect(() => {
    let urlNew: string = '';
    userId !== 0 ? urlNew =url +  `${userId}.json` : urlNew = url + 'users.json';
    const fetchData = async () => {
    setLoading(true)
      try {
        const res = await fetch(urlNew);
        if (!res.ok ) 
          {throw new Error(res.statusText)}
        const data = await res.json();
        userId === 0 ? setUsers(data) : setUser(data);
      }
      catch (e) {
        console.error(e)
        setError(true)
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [userId])

  return (
    <>
      {loading && <p>Loading...</p>}
      {error ? <p>loading error</p> : ''}
      {!loading && !error ? <Users users={users} handleOnClick={handleOnClick}/> : ''}
      {userId !== 0 ? <Details id={user.id} name={user.name} avatar={user.avatar} details={user.details}/> : ''}
    </>
  )
}

export default App
