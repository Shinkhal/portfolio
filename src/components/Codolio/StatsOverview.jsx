import { useState, useEffect } from 'react';

export default function StatsOverview({ profileData }) {
  const platforms = profileData?.platformProfiles?.platformProfiles || [];

  const totalQuestions = platforms.reduce((sum, platform) => {
    return sum + (platform?.totalQuestionStats?.totalQuestionCounts || 0);
  }, 0);

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="text-base text-gray-400 mb-1">Total Questions Solved</h2>
      <div
        className={`text-4xl font-bold transition-opacity duration-700 ease-in-out ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {totalQuestions}
      </div>
    </div>
  );
}
