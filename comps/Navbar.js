import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/"><a>NSD</a></Link>
      </div>
      <div>
      <Link href="/team"><a>Team</a></Link>
      <Link href="/projects"><a>Projects</a></Link>
      <Link href="/tebex"><a>Store</a></Link>
      <Link href="/sneakpeaks"><a>SneakPeaks</a></Link>
      <Link href="https://discord.gg/vgYmzjJJtZ"><a>Discord</a></Link>
      </div>
    </nav>
  );
}
 
export default Navbar;