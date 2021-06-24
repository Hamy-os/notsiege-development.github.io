
import { useEffect } from 'react'
import { useRouter } from 'next/router'
  
  const NotFound = () => {
    const router = useRouter()
  
    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, 6000)
    }, [])
  
    return (
      <div>
        <h1>Whatever you looking for its not here :(</h1>
        <p>You will be redirected to the home page in 6 seconds, while you wait here is some music</p>
          <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VBlFHuCzPgY?autoplay=1" title="404 lol" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
    );
  }
   
  export default NotFound;