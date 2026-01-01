"use client";
import React, { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";
import { Arrow } from "@/components/vectors";

interface LeetCodeData {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  acceptanceRate: number;
  ranking: number;
  status: string;
  message?: string;
}

export function LeetCodeStats() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://leetcode-stats-api.herokuapp.com/dollarSign"
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (json.status === "error") throw new Error(json.message);
        setData(json);
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id='leetcode'
      className='py-24 px-6 bg-muted/20 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center'>
        {/* Text Side */}
        <div className='flex-1 space-y-6'>
          <div className='flex items-center gap-3'>
            <div className='p-3 bg-[#FFA116]/10 rounded-xl'>
              <SiLeetcode className='w-8 h-8 text-[#FFA116]' />
            </div>
            <h2 className='text-4xl md:text-5xl font-display font-bold'>
              Problem Solving
            </h2>
          </div>
          <p className='text-muted-foreground text-lg max-w-xl leading-relaxed'>
            I solve problems to sharpen my logic and algorithmic thinking. Check
            out my stats on LeetCode.
          </p>

          {!loading && !error && data && (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
              <div className='p-4 bg-background rounded-2xl border border-border shadow-sm'>
                <div className='text-3xl font-bold font-display'>
                  {data.totalSolved}
                </div>
                <div className='text-sm text-muted-foreground'>
                  Total Solved
                </div>
              </div>
              <div className='p-4 bg-background rounded-2xl border border-border shadow-sm'>
                <div className='text-3xl font-bold font-display'>
                  {data.ranking.toLocaleString()}
                </div>
                <div className='text-sm text-muted-foreground'>Global Rank</div>
              </div>
            </div>
          )}
        </div>

        {/* Visual Stats Side */}
        <div className='flex-1 w-full max-w-md'>
          {loading ? (
            <div className='h-64 bg-muted animate-pulse rounded-3xl' />
          ) : error ? (
            <div className='h-64 flex items-center justify-center border border-dashed border-red-300 rounded-3xl bg-red-50 dark:bg-red-900/20 text-red-500'>
              Failed to load stats
            </div>
          ) : (
            <div className='bg-background border border-border/50 rounded-3xl p-8 shadow-xl relative group hover:-translate-y-1 transition-transform duration-500'>
              <div className='space-y-6'>
                <StatRow
                  label='Easy'
                  count={data?.easySolved}
                  color='bg-emerald-400'
                  total={data?.totalSolved}
                />
                <StatRow
                  label='Medium'
                  count={data?.mediumSolved}
                  color='bg-yellow-400'
                  total={data?.totalSolved}
                />
                <StatRow
                  label='Hard'
                  count={data?.hardSolved}
                  color='bg-red-400'
                  total={data?.totalSolved}
                />
              </div>

              <div className='mt-8 pt-6 border-t border-border/50 flex justify-between items-center'>
                <span className='text-sm font-medium text-muted-foreground'>
                  Acceptance Rate
                </span>
                <span className='text-xl font-bold font-mono'>
                  {data?.acceptanceRate}%
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StatRow({
  label,
  count,
  color,
  total,
}: {
  label: string;
  count?: number;
  color: string;
  total?: number;
}) {
  // Arbitrary max for visualization scaling loosely, or just relative to total solved?
  // Actually better to make the bar width relative to total questions or just abstract.
  // Let's make it relative to 100% just for visual flair, or relative to "total solved".
  // If total solved is 500, and easy is 200, it's 40%.

  const percentage = total ? ((count || 0) / (total * 1.5)) * 100 : 0; // * 1.5 just to make bars look nice and not full width

  return (
    <div>
      <div className='flex justify-between mb-2'>
        <span className='font-medium'>{label}</span>
        <span className='font-mono text-muted-foreground'>{count}</span>
      </div>
      <div className='h-3 w-full bg-muted rounded-full overflow-hidden'>
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${Math.max(percentage, 5)}%` }} // Min 5% for visibility
        />
      </div>
    </div>
  );
}
