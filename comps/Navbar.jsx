
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">NSD</Link>
      </div>
      <div>
      <Link href="/team"><a>Team</a></Link>
      <Link href="/tebex"><a><span></span><span></span><span></span><span></span>Store</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/sneakpeaks"><a>Sneak Peaks</a></Link>
      <Link href="https://discord.gg/vgYmzjJJtZ"><a>Discord</a></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;