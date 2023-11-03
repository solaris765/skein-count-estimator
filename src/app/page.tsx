import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* welcome page, should have a top bar that states the name of the site "Skein Estimator" with a signin with google option */}
      <h1 className="text-6xl font-bold text-center">Skein Estimator</h1>
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/skein.png"
          alt="Skein Estimator Logo"
          width={200}
          height={200}
        />
        <p className="text-2xl text-center">Welcome to Skein Estimator</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Sign in with Google
        </button>
        <p className="text-center">Sign in to start estimating</p>
      </div>
    </main>
  )
}
