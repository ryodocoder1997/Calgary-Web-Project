import NavBar from './components/NavBar'
import Footer from './components/Footer'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='my-5 text-black text-center flex-1'>MAIN CONTENT</main>
      <Footer />
    </div>
  )
}

export default Home
