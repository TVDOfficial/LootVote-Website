'use client';

import { useState, useEffect } from 'react';

const SERVER_IP = 'lootvote.com';

interface ServerData {
  online: boolean;
  players: { online: number; max: number };
}

export default function ServerStatus() {
  const [data, setData] = useState<ServerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(
          `https://api.mcstatus.io/v2/status/java/${SERVER_IP}`
        );
        const json = await res.json();
        setData({
          online: json.online,
          players: {
            online: json.players?.online ?? 0,
            max: json.players?.max ?? 0,
          },
        });
      } catch {
        setData({ online: false, players: { online: 0, max: 0 } });
      } finally {
        setLoading(false);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
        <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse" />
        <span className="text-zinc-500 text-xs font-semibold">—</span>
      </div>
    );
  }

  const count = data?.players?.online ?? 0;
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00BFFF]/10 border border-[#00BFFF]/30">
      <span className="relative flex h-2 w-2">
        {data?.online && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFFF] opacity-75" />
        )}
        <span
          className={`relative inline-flex rounded-full h-2 w-2 ${
            data?.online ? 'bg-[#00BFFF]' : 'bg-zinc-500'
          }`}
        />
      </span>
      <span className="text-[#00BFFF] text-xs font-bold">
        {count} Online
      </span>
    </div>
  );
}
