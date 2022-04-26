import { useState, useEffect } from 'react';

export const useVideoPlayer = videoElement => {
	const [playing, setPlaying] = useState(true);
	const [muted, setMuted] = useState(true);
	const [progress, setProgress] = useState(0);
	const [speed, setSpeed] = useState(1);

	const togglePlay = () => {
		setPlaying(!playing);
	};

	useEffect(() => {
		let playPromise = videoElement.current.play();

		if (playPromise !== undefined) {
			playPromise
				.then(() => {
					playing ? videoElement.current.play() : videoElement.current.pause();
				})
				.catch(error => console.error('Autoplay Rejected!', error));
		}
	}, [playing, videoElement]);

	const handleOnTimeUpdate = () => {
		const progress =
			(videoElement.current.currentTime / videoElement.current.duration) * 100;
		setProgress(progress);
	};

	const handleVideoProgress = event => {
		const manualChange = Number(event.target.value);
		videoElement.current.currentTime =
			(videoElement.current.duration / 100) * manualChange;
		setProgress(manualChange);
	};

	const handleVideoSpeed = event => {
		const speed = Number(event.target.value);
		videoElement.current.playbackRate = speed;
		setSpeed(speed);
	};

	const toggleMute = () => {
		setMuted(!muted);
	};

	useEffect(() => {
		muted
			? (videoElement.current.muted = true)
			: (videoElement.current.muted = false);
	}, [muted, videoElement]);

	return {
		playing,
		progress,
		muted,
		speed,
		togglePlay,
		handleOnTimeUpdate,
		handleVideoProgress,
		handleVideoSpeed,
		toggleMute,
	};
};
