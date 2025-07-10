export default function Home() {
  return (
    <div className="min-h-screen bg-cremaCafe text-cafeTostado p-10">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Café360</h1>
      <p className="text-lg">La experiencia premium del café, ahora digital.</p>
      <button className="mt-6 px-6 py-3 bg-doradoCafe text-white rounded hover:bg-cafeTostado transition">
        Comenzar
      </button>
    </div>
  )
}