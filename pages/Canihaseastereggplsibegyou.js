import { useEffect } from 'react'
import { useRouter } from 'next/router'


const Canihaseastereggplsibegyou = () => {
const router = useRouter()
    useEffect(() => {
      setTimeout(() => {
        router.push('https://www.youtube.com/watch?v=aslolceGYmo')
      }, 20000)
    }, [])


    return (
        <div>
            <h1>You want easter egg?</h1>
            <h1>Hmmm.. i'll think about it.</h1>
        </div>
    );
}
 
export default Canihaseastereggplsibegyou;