import { useRef, useEffect } from 'react';

export default function WebcamFeed() {
  const videoRef = useRef(null); // Reference to the video element

  // Request webcam access when the component mounts
  useEffect(() => {
    const getWebcamFeed = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true }); // Request video feed
        if (videoRef.current) {
          videoRef.current.srcObject = stream; // Set the video feed to the video element
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    getWebcamFeed(); // Call the function to get the feed
  }, []);

  return (
    <div className="webcam-container">
      <video
        ref={videoRef}
        autoPlay // Automatically start playing the video feed
        className="rounded-lg shadow-lg w-full h-auto"
      ></video>
    </div>
  );
}
