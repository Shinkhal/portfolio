"use client";
import { useEffect, useState } from "react";
import AwardsSection from "./Codolio/AwardsSection";
import PlatformStats from "./Codolio/PlatformStats";
import { Skeleton } from "./ui/skeleton";

export default function Coding() {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/fetchprofile");
        const data = await response.json();
        console.log(data.data);
        setProfileData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (loading) {
    return (
      <section className="py-6 sm:py-10">
        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((box) => (
            <div
              key={box}
              className="bg-neutral-800/90 p-4 rounded-md shadow-md space-y-3"
            >
              <Skeleton className="h-5 w-24 bg-neutral-700" />
              <Skeleton className="h-4 w-full bg-neutral-700" />
              <Skeleton className="h-4 w-3/4 bg-neutral-700" />
              <Skeleton className="h-6 w-16 bg-neutral-700" />
            </div>
          ))}
        </div>

      </section>
    );
  }

  if (!profileData) return null;

  return (
    <section className="py-6 sm:py-10">
      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Stats Overview */}

        {/* Platform Stats */}
        <div className="bg-neutral-800/90 p-4 rounded-md shadow-md">
          <h3 className="text-base font-semibold text-white mb-3">
            Platform Stats
          </h3>
          <PlatformStats platformProfiles={profileData.platformProfiles} />
        </div>

        {/* Awards Section */}
        <div className="bg-neutral-800/90 p-4 rounded-md shadow-md">
          <h3 className="text-base font-semibold text-white mb-3">Awards</h3>
          <AwardsSection profileData={profileData} />
        </div>
      </div>
    </section>
  );
}
