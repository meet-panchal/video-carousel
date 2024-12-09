import { useState, useEffect, useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import './carousel.css';

const Carousel = () => {
    const videoList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const videoRef = useRef<{ [key: number]: HTMLVideoElement | null }>({});

    const [currentVideo, setCurrentVideo] = useState<number>(1);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    // Ensure the current video plays after loading
    useEffect(() => {
        const playCurrentVideo = () => {
            if (videoRef.current[currentVideo]) {
                videoRef.current[currentVideo]?.play().then(() => {
                    setIsPlaying(true);
                    videoRef.current[currentVideo]?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
                }).catch(err => {
                    console.error("Error playing video: ", err);
                });
            }
        };

        playCurrentVideo();

        // Pause other videos
        Object.keys(videoRef.current).forEach((key) => {
            const videoIndex = parseInt(key);
            if (videoIndex !== currentVideo && videoRef.current[videoIndex]) {
                videoRef.current[videoIndex]?.pause();
            }
        });
    }, [currentVideo]);

    const navigateLeft = () => {
        setCurrentVideo((prev) => (prev === 1 ? videoList.length : prev - 1));
    };

    const navigateRight = () => {
        setCurrentVideo((prev) => (prev === videoList.length ? 1 : prev + 1));
    };

    const togglePlayPause = () => {
        const currentVideoElement = videoRef.current[currentVideo];
        if (currentVideoElement) {
            if (isPlaying) {
                currentVideoElement.pause();
                setIsPlaying(false);
            } else {
                currentVideoElement.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <div className="carousel-container">
            <div className="carousel-banner">
                <p id="banner-text">A day in the life</p>
                <div className="navigation">
                    <FaAngleLeft className="arrow" onClick={navigateLeft} />
                    <FaAngleRight className="arrow" onClick={navigateRight} />
                </div>
            </div>

            <div className="carousel-videos-container">
                {videoList.map((video) => (
                    <div
                        className={currentVideo === video ? "video-container current-video" : "video-container"}
                        key={video}
                    >
                        <video
                            className="video"
                            onMouseDown={(e) => e.preventDefault()}
                            disablePictureInPicture
                            onLoadedData={() => {
                                if (video === currentVideo) {
                                    videoRef.current[video]?.play();
                                    setIsPlaying(true);
                                }
                            }}
                            src={require(`../Assets/Videos/${video}.mp4`)}
                            ref={(element) => (videoRef.current[video] = element)}
                        />
                        {video === currentVideo && (
                            <img
                                className="control"
                                src={
                                    isPlaying
                                        ? require("../Assets/Images/pause.png")
                                        : require("../Assets/Images/play.png")
                                }
                                onClick={togglePlayPause}
                                alt="play pause button"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
