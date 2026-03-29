import React from "react";
import { Calendar, Clock3 } from "lucide-react";

export type GameCardProps = {
  title: string;
  year: number;
  hours: number;
  spendBadge: string; // e.g. "¥268" / "$39.99"
  coverUrl?: string;
  onClick?: () => void;
};

export const GameCard: React.FC<GameCardProps> = ({
  title,
  year,
  hours,
  spendBadge,
  coverUrl,
  onClick
}) => {
  return (
    <article
      className="glass-card group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -inset-16 bg-[radial-gradient(circle_at_30%_10%,rgba(34,211,238,0.22)_0,rgba(15,23,42,0)_55%)] blur-2xl" />
        <div className="absolute -inset-16 bg-[radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.2)_0,rgba(15,23,42,0)_60%)] blur-2xl" />
      </div>

      <div className="absolute right-3 top-3 z-20">
        <span className="inline-flex items-center rounded-full bg-slate-950/55 px-2.5 py-1 text-[0.7rem] font-medium text-cyan-200 ring-1 ring-cyan-400/40 backdrop-blur-md">
          {spendBadge}
        </span>
      </div>

      <div className="relative z-10">
        <div className="relative h-40 w-full overflow-hidden">
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={title}
              className="h-full w-full origin-center object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-tr from-fuchsia-600 via-slate-900 to-cyan-500 opacity-80 transition-transform duration-500 group-hover:scale-[1.06]" />
          )}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(15,23,42,0.25)_0,rgba(15,23,42,0.88)_55%,rgba(15,23,42,1)_100%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-400/10" />
          </div>
        </div>

        <div className="space-y-4 p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 space-y-1.5">
              <h3 className="truncate text-base font-semibold text-slate-50">
                {title}
              </h3>
              <div className="mt-1 inline-flex items-center gap-2 text-xs text-slate-400">
                <Calendar className="h-3.5 w-3.5 text-fuchsia-300/90" />
                <span className="font-mono">{year}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/40 px-3 py-2 ring-1 ring-slate-700/60 backdrop-blur-md">
                <Clock3 className="h-4 w-4 text-cyan-300" />
                <div className="flex flex-col items-end leading-tight">
                  <p className="text-lg font-semibold text-slate-50">{hours}h</p>
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">
                    Playtime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-slate-700/60 transition-colors duration-300 group-hover:ring-cyan-400/50" />
    </article>
  );
};

