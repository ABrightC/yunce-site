import React from "react";
import { Clock3, CreditCard, Gamepad2, Trophy } from "lucide-react";

type StatHeaderProps = {
  totalGames?: number;
  totalHours?: number;
  totalAchievementsUnlocked?: number;
  achievementOverallPct?: number; // 0-100 for ring
  totalSpend?: number; // in CNY for now
};

function clampPct(n: number) {
  if (Number.isNaN(n)) return 0;
  return Math.min(100, Math.max(0, n));
}

function formatInt(n: number) {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 }).format(n);
}

function formatMoneyCny(n: number) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0
  }).format(n);
}

const Ring: React.FC<{ pct: number }> = ({ pct }) => {
  const p = clampPct(pct);
  const bg = `conic-gradient(
    rgba(34,211,238,0.95) 0%,
    rgba(217,70,239,0.95) ${p}%,
    rgba(51,65,85,0.85) ${p}%,
    rgba(51,65,85,0.85) 100%
  )`;

  return (
    <div
      className="relative h-14 w-14 rounded-full p-[2px] shadow-[0_0_22px_rgba(34,211,238,0.18)]"
      style={{ background: bg }}
      aria-label={`成就解锁进度 ${p}%`}
    >
      <div className="absolute inset-[6px] rounded-full bg-slate-950/60 ring-1 ring-slate-700/60 backdrop-blur-md" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-mono text-[0.65rem] text-slate-200">{p}%</span>
      </div>
    </div>
  );
};

export const StatHeader: React.FC<StatHeaderProps> = ({
  totalGames = 87,
  totalHours = 1248,
  totalAchievementsUnlocked = 542,
  achievementOverallPct = 68,
  totalSpend = 12680
}) => {
  const days = totalHours / 24;
  const daysText = new Intl.NumberFormat("zh-CN", {
    maximumFractionDigits: 1
  }).format(days);

  const items = [
    {
      id: "games",
      label: "总游戏数量",
      value: formatInt(totalGames),
      icon: Gamepad2,
      accent: "from-cyan-400/90 to-sky-500/90"
    },
    {
      id: "hours",
      label: "累计总时长",
      value: `${formatInt(totalHours)}h`,
      sub: `（≈${daysText}天）`,
      icon: Clock3,
      accent: "from-fuchsia-400/90 to-purple-500/90"
    },
    {
      id: "achievements",
      label: "成就解锁总数",
      value: formatInt(totalAchievementsUnlocked),
      icon: Trophy,
      accent: "from-emerald-400/90 to-cyan-400/90",
      //right: <Ring pct={achievementOverallPct} />
    },
    {
      id: "spend",
      label: "生涯总投入",
      value: formatMoneyCny(totalSpend),
      icon: CreditCard,
      accent: "from-purple-400/90 to-fuchsia-500/90"
    }
  ] as const;

  return (
    <section className="space-y-4">
      <header className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80">
            CAREER OVERVIEW
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-50 sm:text-3xl">
            生涯总览
          </h1>
        </div>
        <p className="text-xs text-slate-400 sm:text-sm">
          赛博朋克极简主义 · Glassmorphism
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
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
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
                    {item.label}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <p className="text-2xl font-semibold text-slate-50">
                      {item.value}
                    </p>
                    {"sub" in item && item.sub ? (
                      <p className="text-xs text-slate-400">{item.sub}</p>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/*{"right" in item && item.right ? item.right : null}*/}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950/35 ring-1 ring-slate-600/60 group-hover:ring-cyan-400/70">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

