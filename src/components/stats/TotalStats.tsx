import React from "react";
import { Controller, Trophy, Clock3 } from "lucide-react";

export const TotalStats: React.FC = () => {
  const stats = [
    {
      id: "hours",
      label: "总游玩时长",
      value: "1,248h",
      icon: Clock3,
      accent: "from-cyan-400/90 to-sky-500/90"
    },
    {
      id: "games",
      label: "已游玩游戏",
      value: "87",
      icon: Controller,
      accent: "from-fuchsia-400/90 to-purple-500/90"
    },
    {
      id: "achievements",
      label: "已解锁成就",
      value: "542",
      icon: Trophy,
      accent: "from-emerald-400/90 to-cyan-400/90"
    }
  ];

  return (
    <section className="space-y-4">
      <header className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
            PERSONAL GAME LIFETIME
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-50 sm:text-3xl">
            个人游戏生涯 · 成就总览
          </h1>
        </div>
        <p className="text-xs text-slate-400 sm:text-sm">
          赛博朋克极简面板 · React + Tailwind
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.id}
              className="glass-card group relative overflow-hidden p-4 sm:p-5"
            >
              <div
                className={`pointer-events-none absolute inset-[1px] rounded-[1rem] bg-gradient-to-tr ${item.accent} opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-70`}
              />
              <div className="relative z-10 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                    {item.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-50">
                    {item.value}
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/70 ring-1 ring-slate-600/60 group-hover:ring-cyan-400/70">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
