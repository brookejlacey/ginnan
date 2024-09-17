import Image from "next/image"

export default function AvailableOnSection() {
  const platforms = [
    "Platform 1", "Platform 2", "Platform 3", "Platform 4",
    "Platform 5", "Platform 6", "Platform 7", "Platform 8",
    "Platform 9", "Platform 10", "Platform 11", "Platform 12"
  ]

  return (
    <section className="bg-gradient-to-b from-amber-400 to-amber-500 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-amber-900 leading-tight drop-shadow-md">
          AVAILABLE ON
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-amber-600 rounded-2xl p-4 flex items-center justify-center shadow-lg">
              <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                <span className="text-amber-800 font-bold">{platform[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}