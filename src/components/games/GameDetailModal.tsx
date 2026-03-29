import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock3,
  Gamepad2,
  Monitor,
  Smartphone,
  X,
  Receipt
} from "lucide-react";
import type { Game, PersonalMilestone } from "../../data/games";

type GameDetailModalProps = {
  open: boolean;
  game: Game | null;
  onClose: () => void;
};

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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 8,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
  }
};

function MilestoneItem({ milestone }: { milestone: PersonalMilestone }) {
  const hasImage = Boolean(milestone.milestoneImage);

  if (hasImage) {
    return (
      <div className="space-y-3 rounded-2xl bg-slate-900/60 p-3 ring-1 ring-slate-700/60 backdrop-blur-xl">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="sm:w-40">
            <div className="relative overflow-hidden rounded-xl bg-slate-800/80 ring-1 ring-slate-700/70">
              <img
                src={milestone.milestoneImage}
                alt={milestone.title}
                loading="lazy"
                decoding="async"
                className="h-28 w-full object-cover sm:h-32"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-slate-950/40" />
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">
                {milestone.title}
              </h3>
              {milestone.date ? (
                <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-slate-500">
                  {milestone.date}
                </p>
              ) : null}
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              {milestone.description}
            </p>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className="space-y-2 rounded-2xl bg-slate-900/60 p-3 ring-1 ring-slate-700/60 backdrop-blur-xl">
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">
          {milestone.title}
        </h3>
        {milestone.date ? (
          <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-slate-500">
            {milestone.date}
          </p>
        ) : null}
      </div>
      <p className="text-xs leading-relaxed text-slate-300">
        {milestone.description}
      </p>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
    </div>
  );
}

export const GameDetailModal: React.FC<GameDetailModalProps> = ({
  open,
  game,
  onClose
}) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && game ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 backdrop-blur-2xl"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleBackdropClick}
        >
          <motion.div
            variants={panelVariants}
            className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/90 shadow-[0_0_60px_rgba(34,211,238,0.30)]"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-950/70 text-slate-200 ring-1 ring-slate-600/80 transition hover:text-cyan-200 hover:ring-cyan-400/80"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              {game.coverUrl ? (
                <img
                  src={game.coverUrl}
                  alt={game.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-tr from-fuchsia-600 via-slate-900 to-cyan-500" />
              )}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(15,23,42,0.3)_0,rgba(15,23,42,0.9)_55%,rgba(15,23,42,1)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-fuchsia-400/25" />

              <div className="relative flex h-full flex-col justify-end gap-3 p-4 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
                      GAME DETAIL
                    </p>
                    <h2 className="max-w-xl text-xl font-semibold text-slate-50 sm:text-2xl">
                      {game.title}
                    </h2>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-200 ring-1 ring-slate-600/80 backdrop-blur-md">
                      {(() => {
                        const Icon = platformIcon(game.platform);
                        return (
                          <Icon className="h-3.5 w-3.5 text-cyan-300/90" />
                        );
                      })()}
                      <span>{game.platform}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-100">
                    <div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/50 px-3 py-2 ring-1 ring-slate-700/80 backdrop-blur-md">
                      <Clock3 className="h-4 w-4 text-cyan-300" />
                      <div className="flex flex-col items-start leading-tight">
                        <span className="text-sm font-semibold">
                          {game.playTime}h
                        </span>
                        <span className="text-[0.6rem] uppercase tracking-[0.22em] text-slate-400">
                          Playtime
                        </span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/50 px-3 py-2 ring-1 ring-slate-700/80 backdrop-blur-md">
                      <Calendar className="h-4 w-4 text-fuchsia-300" />
                      <span className="text-[0.75rem] font-mono">
                        {new Date(game.purchaseDate).getFullYear()}
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-xl bg-slate-950/50 px-3 py-2 ring-1 ring-cyan-400/80 backdrop-blur-md">
                      <Receipt className="h-4 w-4 text-cyan-300" />
                      <span className="text-[0.8rem] font-semibold text-cyan-100">
                        ¥{game.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-950/60 p-4 sm:p-6">
              <section className="mx-auto flex max-w-4xl flex-col gap-4">
                <header className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">
                      CAREER MILESTONES
                    </p>
                    <h3 className="mt-1 text-sm font-semibold text-slate-50">
                      生涯里程碑
                    </h3>
                  </div>
                  <p className="text-[0.7rem] text-slate-400">
                    {game.personalMilestones.length > 0
                      ? `共 ${game.personalMilestones.length} 条个人成就记录`
                      : "还没有为这款游戏记录里程碑"}
                  </p>
                </header>

                {game.personalMilestones.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-700/70 bg-slate-900/50 p-6 text-center text-xs text-slate-400">
                    你可以在未来为这款游戏添加“第一次通关”“最难忘的一晚”等个人里程碑，让它真正变成你的故事。
                  </div>
                ) : (
                  <div className="space-y-3">
                    {game.personalMilestones.map((m) => (
                      <MilestoneItem key={m.id} milestone={m} />
                    ))}
                  </div>
                )}
              </section>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default GameDetailModal;

