import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link"; // Import for routing

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-8 sm:p-20 bg-gradient-to-br from-gray-100 to-white text-black"
    >
      <div className="flex flex-col justify-center items-center lg:items-start lg:w-1/2 text-center lg:text-left">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-lg">Welcome to HandsOn</h1>
        <p className="text-2xl mb-6 max-w-lg drop-shadow-md">
          HandsOn helps you translate text into sign language and practice real-time sign gestures, making learning interactive and fun.
        </p>
        <Link legacyBehavior href="/translator">
          <a
            className="bg-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 hover:text-white transition-all"
          >
            Start Learning & Translating
          </a>
        </Link>
      </div>

      <div className="hidden lg:block lg:w-1/2">
        <Image
          className="rounded-xl shadow-lg"
          src={"/images/logo.png"}
          alt="Hand gestures illustration"
          width={400}
          height={400}
          priority
        />
      </div>

      <footer className="mt-20 lg:mt-0 text-sm lg:text-right">
        © 2024 Imaduddin Sheikh | Follow me on{" "}
        <a
          className="underline hover:text-gray-500"
          href="https://github.com/imaduddin-sheikh"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        ,{" "}
        <a
          className="underline hover:text-gray-500"
          href="https://linkedin.com/in/imaduddin-sheikh"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
