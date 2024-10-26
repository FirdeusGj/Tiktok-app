import React, { useState, useEffect } from "react";
import { createClient } from "pexels";
import "./Body.css";

export default function Body() {
  const [videoUrl, setVideoUrl] = useState(null);

  const client = createClient(
    "m9ysdzuu2yz1nxnqNyG2UCwS3rcHW61eJTCJppDQBwdBd3qRhD46t8Ak"
  );

  useEffect(() => {
    const fetchVideo = async () => {
      const response = await client.videos.search({
        orientation: "portrait",
        size: "medium",
        query: "Ocean",
        page: 1,
        per_page: 5,
        max_width: 1080,
      });

      if (response.videos.length > 0) {
        // Get the first video and find an HD file if available
        const videoFile =
          response.videos[1].video_files.find(
            (file) => file.quality === "hd"
          ) || response.videos[0].video_files[0];
        setVideoUrl(videoFile.link); // Set the direct link to the video file
      }
    };

    fetchVideo();
  }, [client]);

  return (
    <section className="body__section">
      <div className="body__div">
        {videoUrl ? (
          <video className="video" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </section>
  );
}
