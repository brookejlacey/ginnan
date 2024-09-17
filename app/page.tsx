import { Button } from "@/components/ui/button"
import { InstagramIcon, TwitterIcon, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import AvailableOnSection from "./available-on-section"

export default function Component() {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash === '#about') {
        e.preventDefault()
        aboutRef.current?.scrollIntoView({ behavior: "smooth" })
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <>
      <style jsx global>{`
        @font-face {
          font-family: 'SysFalso';
          src: url('/fonts/SysFalsoW00-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        @font-face {
          font-family: 'SysFalso';
          src: url('/fonts/SysFalsoW00-Italic.ttf') format('truetype');
          font-weight: normal;
          font-style: italic;
        }
        body {
          font-family: 'SysFalso', sans-serif;
        }
      `}</style>
      <div className="min-h-screen bg-amber-400 text-amber-900 flex flex-col font-sysfalso">
        <header className="sticky top-0 z-50 bg-amber-400 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BrandLogo-9yqwajbLcwvHuD8Jui7OdxI3RY3BpE.png" 
              alt="Ginnan Logo" 
              width={50} 
              height={50}
            />
            <div className="space-x-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="#about">ABOUT</a>
              </Button>
              <Button variant="ghost" size="sm">BUY</Button>
              <Button variant="ghost" size="sm">TOKENOMICS</Button>
              <Button variant="ghost" size="sm">FAQ</Button>
            </div>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" asChild>
                <a href="https://www.instagram.com/ginnanthecat/" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://x.com/Ginnanthecat" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Button>
              <Button size="icon" variant="ghost" asChild>
                <a href="https://dexscreener.com/solana/GinNabffZL4fUj9Vactxha74GDAW8kDPGaHqMtMzps2f" target="_blank" rel="noopener noreferrer">
                  <LinkIcon className="h-4 w-4" />
                  <span className="sr-only">Dexscreener</span>
                </a>
              </Button>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <section className="relative min-h-screen flex items-center justify-center p-4">
            <div className="text-center z-10">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GinnanTheCat-yW9F5Xg6Qr2t0N9EOnY40HTAanH4qT.png" 
                alt="Ginnan The Cat" 
                width={300} 
                height={100} 
                className="mx-auto mb-4"
              />
              <h1 className="text-4xl font-bold mb-2">$GINNAN</h1>
              <p className="text-xl mb-4">#CatMemeRevolution</p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white text-xl py-2 px-6">
                BUY $GINNAN
              </Button>
            </div>
            <div className="absolute bottom-0 right-0 w-1/3 z-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoHang-K0OchQlcpHZW0RkKmA2YX0K4fGWpWc.png" 
                alt="Hanging Ginnan" 
                width={300} 
                height={300}
              />
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Doge-7fZXWSjeQYlByk6iv9CodwqkkNvldd.png" 
                alt="Doge and Ginnan" 
                width={100} 
                height={50}
              />
            </div>
            <div className="absolute bottom-4 left-4 z-0">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoPeek-nEeGvStLuj6BFicHEd99Jw0QtnAuk3.png" 
                alt="Peeking Ginnan" 
                width={100} 
                height={50}
              />
            </div>
          </section>

          <section ref={aboutRef} id="about" className="bg-gradient-to-b from-amber-300 to-amber-400 text-amber-900 py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoHang-K0OchQlcpHZW0RkKmA2YX0K4fGWpWc.png"
                  alt="Ginnan the Cat"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-5xl font-extrabold mb-8 text-amber-800 leading-tight">
                  Who the heck is <span className="text-amber-600">Ginnan the Cat?</span>
                </h2>
                <p className="text-lg leading-relaxed">
                  Ginnan is the feline sensation taking the crypto world by storm. Born as the mischievous sister to the famous Doge, this sassy Shiba Inu cat brings a purr-fectly balanced blend of cuteness and blockchain innovation to the table.
                </p>
                <p className="text-lg leading-relaxed">
                  With whiskers twitching at the future of finance, Ginnan represents the next evolution in meme-driven cryptocurrencies. She's here to prove that while Doge may have had its day, it's time for cats to pounce on the blockchain.
                </p>
                <p className="text-lg leading-relaxed">
                  Smart, swift, and running on Solana, Ginnan isn't just another copycat coin - she's leading the pack in building a vibrant, fun-loving community of crypto enthusiasts who believe finance should be as playful as it is powerful.
                </p>
                <p className="text-xl font-semibold italic">
                  Ready to join Ginnan's clowder? Buckle up for a wild ride through the world of decentralized feline finance!
                </p>
                <Link 
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=GinNabffZL4fUj9Vactxha74GDAW8kDPGaHqMtMzps2f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white text-xl font-bold py-3 px-8 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  Buy $GINNAN
                </Link>
              </div>
            </div>
          </section>

          <AvailableOnSection />
        </main>
      </div>
    </>
  )
}