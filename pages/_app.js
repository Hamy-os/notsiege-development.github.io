import Layout from '../comps/Layout'
import Head from 'next/head'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
  <div>
        <Head>
        <link rel="manifest" href="manifest.webmanifest" crossOrigin="use-credentials"></link>
        <meta name="keywords" content="fivem, gta5, gat 5, gta 5, gta five, five m, 5m, 5, m, 5m, grand theft auto 5, gta v, grand theft auto v, grand, theft, auto, esx, esx-reborn, notsiege, notsiege-development, not, siege, development, fivem script, fivem scripts, fivem cars, cars, fivem skins, fivem peds, eup, fivem eup"/>
        <meta name="description" content="notsiege-development is a group of people devoted to making GTAV a better place thru mods. We mainly make cars, skins, scripts, maps but we also make much more mods! So come check us out"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="subject" content="GTAV Mods"/>
        <meta name="copyright"content="notsiege-development"/>
        <meta name="language" content="EN"/>
        <meta name="robots" content="index,follow" />
        <meta name="revised" content="Sunday, July 6th, 2021, 8:16 pm" />
        <meta name="topic" content="GTA 5 Modding"/>
        <meta name="summary" content="notsiege development is a group of people that make mods for FiveM and GTAV"/>
        <meta name="Classification" content="Business"/>
        <meta name="author" content="hamy & siege, pr@notsiege.dev"/>
        <meta name="designer" content="SaltySea"/>
        <meta name="reply-to" content="pr@notsiege.dev"/>
        <meta name="owner" content="notsiege-development"/>
        <meta name="url" content="https://notsiege.dev"/>
        <meta name="identifier-URL" content="https://notsiege.dev"/>
        <meta name="directory" content="submission"/>
        <meta name="category" content="Gaming"/>
        <meta name="coverage" content="Worldwide"/>
        <meta name="distribution" content="Global"/>
        <meta name="rating" content="General"/>
        <meta name="revisit-after" content="7 days"/>
        <meta httpEquiv="Expires" content="0"/>
        <meta name="og:title" content="notsiege development"/>
        <meta name="og:type" content="Buisness"/>
        <meta name="og:url" content="https://notsiege.dev"/>
        <meta name="og:image" content="https://hamy.iodine.gg/4ag07.jpeg"/>
        <meta name="og:site_name" content="notsiege-development"/>
        <meta property="og:description" content="NSD is a group of people devoted to making GTAV a better place. We mainly make cars, skins, scripts and maps but we also make many more mods!"/>
        <meta name="og:email" content="pr@notsiege.dev"/>
        <meta name="og:region" content="CA"/>
        <meta name="og:postal-code" content="00000"/>
        <meta name="og:country-name" content="USA"/>
        <meta property="og:video" content="https://hamy.iodine.gg/7dc2b.mp4" />
        <meta property="og:video:type" content="video/mp4"/>
        <meta property="og:url" content="https://notsiege.dev"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="notsiege development"/>
        <meta property="og:description" content="NSD is a group of people devoted to making GTAV a better place. We mainly make cars, skins, scripts and maps but we also make many more mods!"/>
        <meta property="og:image" content="https://hamy.iodine.gg/4ag07.jpeg"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="notsiege.dev"/>
        <meta property="twitter:url" content="https://notsiege.dev"/>
        <meta name="twitter:title" content="notsiege development"/>
        <meta name="twitter:description" content="NSD is a group of people devoted to making GTAV a better place. We mainly make cars, skins, scripts and maps but we also make many more mods!"/>
        <meta name="twitter:image" content="https://hamy.iodine.gg/4ag07.jpeg"/>
        <meta name="theme-color" content="#0090ff"/>
        <link rel="manifest" href="manifest.json"/>
        <link rel="manifest" href="manifest.webmanifest" crossOrigin="use-credentials"></link>
    </Head>
  <main className="c">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </main>
    </div>
  )
}

export default MyApp
