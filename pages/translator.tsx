import { useState } from 'react';
import WebcamFeed from '@/components/WebcamFeed';


export default function Translator() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen p-8 bg-white text-black">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-4xl font-bold">Sign Language Translator</h1>
        <a
          className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
          href="/"
        >
          Home
        </a>
      </header>

      <main className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* Text Input and Translation */}
        <div className="lg:w-2/3 flex flex-col items-center lg:items-start">
          <textarea
            className="border border-gray-300 p-4 w-full h-40 text-lg rounded-md shadow-sm focus:outline-none focus:ring focus:border-indigo-300"
            placeholder="Type text here to translate into sign language..."
            value={inputText}
            onChange={handleInputChange}
          />
          <div className="mt-6 w-full">
            <h2 className="text-2xl font-semibold mb-4">Translation Output:</h2>
            <div className="grid grid-cols-4 gap-4">
              {/* For demonstration, display placeholder images for signs */}
              {inputText.split(" ").map((word, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`/images/sign_${word}.png`} // Replace with actual sign images or animation paths
                    alt={`Sign for ${word}`}
                    className="h-32 w-32 object-cover rounded-lg"
                  />
                  <p className="mt-2 text-sm">{word}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Webcam Preview and Instructions */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-start gap-6">
          <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
            <WebcamFeed />
          </div>
          <div className="w-full p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50">
            <h3 className="text-xl font-bold mb-4">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Align your hands properly in front of the camera.</li>
              <li>Make sure your background is not cluttered for better detection.</li>
              <li>Use slow, clear gestures to practice each sign.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
