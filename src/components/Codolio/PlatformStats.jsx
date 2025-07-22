import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Code,
  AlignLeft,
  BarChart,
  Award,
  Terminal,
  Github,
} from 'lucide-react';

const PlatformStats = ({ platformProfiles }) => {
  if (!platformProfiles || !platformProfiles.platformProfiles) {
    return (
      <Card className="bg-neutral-900 text-white border border-gray-700 rounded-xl shadow-md">
        <CardContent className="py-8 px-6">
          <p className="text-center text-gray-400 text-sm">No platform data available</p>
        </CardContent>
      </Card>
    );
  }

  const sortedPlatforms = [...platformProfiles.platformProfiles].sort((a, b) => {
    const aCount = a.totalQuestionStats?.totalQuestionCounts || 0;
    const bCount = b.totalQuestionStats?.totalQuestionCounts || 0;
    return bCount - aCount;
  });

  const totalContests = sortedPlatforms.reduce((count, platform) => {
    return count + (platform.contestActivityStats?.contestActivityList?.length || 0);
  }, 0);

  const platformsWithContests = sortedPlatforms.filter(
    (platform) => (platform.contestActivityStats?.contestActivityList?.length || 0) > 0
  );

  return (
    <Card className="bg-neutral-900 text-white border border-gray-700 rounded-xl shadow-md">
      <CardContent className="p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-6 sm:mb-0">
            <h2 className="text-base text-gray-400">Total Contests</h2>
            <div className="text-5xl font-semibold text-white mt-1">
              {totalContests}
            </div>
          </div>

          <div className="space-y-3 w-full sm:w-1/2">
            {platformsWithContests.map((platform) => {
              const platformName = getPlatformDisplayName(platform.platform);
              const contestCount = platform.contestActivityStats?.contestActivityList?.length || 0;

              return (
                <div
                  key={platform.platform}
                  className="flex items-center justify-between bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-sm text-gray-200 hover:bg-gray-700 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-gray-400">
                      {getPlatformIcon(platform.platform)}
                    </div>
                    <span>{platformName}</span>
                  </div>
                  <span className="font-medium text-gray-300">{contestCount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Helper to get display names
const getPlatformDisplayName = (platform) => {
  const displayNames = {
    leetcode: 'LeetCode',
    geeksforgeeks: 'GeeksForGeeks',
    codeforces: 'CodeForces',
    hackerrank: 'HackerRank',
    codechef: 'CodeChef',
    github: 'GitHub',
  };
  return displayNames[platform] || platform;
};

// Icon mapping
const getPlatformIcon = (platform) => {
  const iconProps = { size: 18, className: "text-gray-400" };
  switch (platform) {
    case 'leetcode':
      return <Code {...iconProps} />;
    case 'codechef':
      return <Terminal {...iconProps} />;
    case 'codeforces':
      return <BarChart {...iconProps} />;
    case 'geeksforgeeks':
      return <AlignLeft {...iconProps} />;
    case 'hackerrank':
      return <Award {...iconProps} />;
    case 'github':
      return <Github {...iconProps} />;
    default:
      return <Terminal {...iconProps} />;
  }
};

export default PlatformStats;
