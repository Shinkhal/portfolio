import React, { useState } from 'react';
import Image from 'next/image';

const AwardsSection = ({ profileData }) => {
  const [showAllAwards, setShowAllAwards] = useState(false);

  const getAllBadges = () => {
    const badges = [];

    if (!profileData || !profileData.platformProfiles?.platformProfiles) return [];

    profileData.platformProfiles.platformProfiles.forEach(platform => {
      platform.badgeStats?.badgeList?.forEach(badge => {
        badges.push({
          ...badge,
          platform: platform.platform,
          platformName: getPlatformDisplayName(platform.platform)
        });
      });
    });

    return badges;
  };

  const badges = getAllBadges();
  const displayBadges = showAllAwards ? badges : badges.slice(0, 4);
  const badgeCount = badges.length;

  return (
    <div className="bg-neutral-900 rounded-xl p-6 border border-gray-800 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-200">Awards</h2>
        <span className="text-4xl font-bold text-gray-100">{badgeCount}</span>
      </div>

      {badges.length === 0 ? (
        <div className="text-gray-500 text-center py-4 text-sm">No awards found</div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayBadges.map((badge, index) => (
              <div
                key={`${badge.platform}-${badge.name}-${index}`}
                className="flex flex-col items-center justify-center p-2"
              >
                <div className="relative">
                  {badge.icon ? (
                    <Image
                      src={getFullImageUrl(badge.icon)}
                      alt={badge.name}
                      width={64}
                      height={64}
                      className="object-contain rounded-md"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-md bg-gray-700 flex items-center justify-center text-white">
                      <span className="text-lg font-bold">
                        {getBadgeInitials(badge.name)}
                      </span>
                    </div>
                  )}

                  {badge.stars && (
                    <div className="absolute bottom-0 right-0 bg-gray-200 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-sm">
                      {badge.stars}★
                    </div>
                  )}
                </div>
                <div className="mt-2 text-center">
                  <p
                    className="text-xs text-gray-200 font-medium truncate max-w-full"
                    title={badge.name}
                  >
                    {shortenBadgeName(badge.name)}
                  </p>
                  <p className="text-xs text-gray-400 capitalize">
                    {badge.platformName}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {badges.length > 4 && (
            <div className="text-center mt-4">
              <button
                onClick={() => setShowAllAwards(!showAllAwards)}
                className="text-gray-400 text-sm hover:text-white transition hover:underline"
              >
                {showAllAwards ? 'Show less' : 'Show more'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// Helpers
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

const getBadgeInitials = (name) => {
  if (!name) return '?';
  const words = name.trim().split(' ');
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

const shortenBadgeName = (name) => {
  return name.length <= 20 ? name : name.substring(0, 18) + '...';
};

const getFullImageUrl = (url) => {
  return url && url.startsWith('/static') ? `https://leetcode.com${url}` : url;
};

export default AwardsSection;
