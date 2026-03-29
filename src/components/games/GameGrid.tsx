import React from "react";
import { Gamepad2, HeartCrack, Monitor, Smartphone, Sparkles } from "lucide-react";
import { GameCard } from "./GameCard";
import { AnimatePresence, motion } from "framer-motion";
import type { Game, PersonalMilestone } from "../../data/games";

function platformTokens(platform: string) {
  return platform
    .split(/[\/|,]/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function platformIcon(platform: string) {
  const tokens = platformTokens(platform).map((t) => t.toLowerCase());
  if (tokens.includes("mobile")) return Smartphone;
  if (tokens.includes("pc") || tokens.includes("steam")) return Monitor;
  if (
    tokens.includes("switch") ||
    tokens.includes("playstation") ||
    tokens.includes("xbox") ||
    tokens.includes("console")
  )
    return Gamepad2;
  return Monitor;
}

function completionFromMilestones(
  milestones: PersonalMilestone[],
  playTime: number
) {
  if (!milestones.length) {
    const base = Math.min(60, Math.max(10, Math.round(playTime / 10)));
    return base;
  }
  const base = Math.min(80, 30 + milestones.length * 15);
  return Math.min(100, base + Math.min(20, Math.round(playTime / 40)));
}

export const GameGrid: React.FC<{
  games: Game[];
  onSelect?: (game: Game) => void;
}> = ({ games, onSelect }) => {
  const [sortKey, setSortKey] = React.useState<"hours" | "completion" | "spend">(
    "hours"
  );

  const spendFmt = React.useMemo(
    () =>
      new Intl.NumberFormat("zh-CN", {
        style: "currency",
        currency: "CNY",
        maximumFractionDigits: 0
      }),
    []
  );

  const displayGames = React.useMemo(() => {
    const sorted = [...games].sort((a, b) => {
      if (sortKey === "hours") return b.playTime - a.playTime;
      if (sortKey === "completion")
        return (
          completionFromMilestones(b.personalMilestones, b.playTime) -
          completionFromMilestones(a.personalMilestones, a.playTime)
        );
      return b.price - a.price;
    });

    return sorted;
  }, [sortKey, games]);

  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-sm font-medium tracking-[0.25em] text-slate-300 uppercase">
          GAME LIBRARY
        </h2>
        <div className="inline-flex items-center gap-2 text-xs text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-fuchsia-400" />
          <span>按进度与时长一览你的游戏人生</span>
        </div>
      </header>

      <div className="glass-card flex flex-col gap-3 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center justify-start gap-3">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-slate-400">
            排序
          </p>
          <div className="inline-flex overflow-hidden rounded-full ring-1 ring-slate-700/70">
            {(
              [
                { key: "hours", label: "时长" },
                { key: "completion", label: "达成率" },
                { key: "spend", label: "花费" }
              ] as const
            ).map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortKey(opt.key)}
                className={[
                  "px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.2em] transition",
                  "bg-slate-950/30 hover:bg-slate-950/45",
                  sortKey === opt.key
                    ? "text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.16)]"
                    : "text-slate-300"
                ].join(" ")}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        layout
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="popLayout">
          {displayGames.length === 0 ? (
            <motion.div
              key="empty-state"
              layout
              initial={{ opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.985 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card relative col-span-full overflow-hidden p-8"
            >
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.16)_0,rgba(15,23,42,0)_60%)] blur-2xl" />
                <div className="absolute -inset-24 bg-[radial-gradient(circle_at_80%_40%,rgba(217,70,239,0.14)_0,rgba(15,23,42,0)_65%)] blur-2xl" />
              </div>

              <div className="relative flex flex-col items-center justify-center gap-3 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(90deg,rgba(34,211,238,0.22)_0,rgba(217,70,239,0.18)_50%,rgba(34,211,238,0.22)_100%)] blur-xl" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-slate-950/35 ring-1 ring-cyan-300/35 backdrop-blur-md shadow-[0_0_22px_rgba(34,211,238,0.16)]">
                    <HeartCrack className="h-7 w-7 text-fuchsia-200 drop-shadow-[0_0_12px_rgba(217,70,239,0.5)]" />
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-100">
                  未找到匹配的生涯记录
                </p>
                <p className="text-xs text-slate-400">
                  试试减少筛选条件，或者点击右侧 Reset 一键清空。
                </p>
              </div>
            </motion.div>
          ) : (
            displayGames.map((game) => (
              <motion.div
                key={game.id}
                layout
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 26,
                  mass: 0.9,
                  bounce: 0.35
                }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between px-1">
                  <div className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
                    {(() => {
                      const Icon = platformIcon(game.platform);
                      return (
                        <Icon className="h-3.5 w-3.5 text-cyan-300/90" />
                      );
                    })()}
                    <span>{game.platform}</span>
                  </div>
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-600">
                    ID-{game.id.padStart(3, "0")}
                  </p>
                </div>

                <GameCard
                  title={game.title}
                  year={new Date(game.purchaseDate).getFullYear()}
                  hours={game.playTime}
                  spendBadge={spendFmt.format(game.price)}
                  coverUrl={game.coverUrl}
                  onClick={() => onSelect?.(game)}
                />
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
