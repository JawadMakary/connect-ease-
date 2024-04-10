import React from 'react';
import vidTips from '../../constants/VideoGuides.json';
import Banner from '../../components/Banner';

const VideoTips = () => {
  return (
    <>
    <Banner name="Video Tips" imgUrl="https://i.imgur.com/liZJ432.jpeg" />
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vidTips && vidTips.tips.map((tip, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative overflow-hidden h-60">
              <iframe 
                src={tip.youtube_link}
                title="YouTube video player"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{tip.title}</h2>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </>
  );
};

export default VideoTips;
