import React from 'react';
import GitHubCalendar from 'react-github-calendar';

export const GitHubCalendarComponent = ({ username }) => {
  const theme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <section className="rounded-xl border border-gray-800 bg-black/50 p-4 sm:p-6 shadow-lg backdrop-blur-sm">
      <div className="text-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-white">GitHub Contributions</h2>
        <p className="text-sm text-gray-400">My activity over the past year</p>
      </div>

      <div className="flex justify-center overflow-x-auto">
        <GitHubCalendar
          username={username}
          theme={theme}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          hideColorLegend={false}
          labels={{
            totalCount: '{{count}} contributions in the last year',
          }}
        />
      </div>

      <div className="mt-4 text-center text-sm text-gray-400">
        <p>
          View my complete contribution history on{' '}
          <a
            href={`https://github.com/${username}`}
            className="text-indigo-400 hover:text-indigo-300 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default GitHubCalendarComponent;
