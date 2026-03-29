import React from "react";
import { Shell } from "./components/layout/Shell";
import { StatHeader } from "./components/stats/StatHeader";
import { GameGrid } from "./components/games/GameGrid";
import { AnimatePresence, motion } from "framer-motion";
import { FilterBar, type FilterBarOptions, type FilterBarValue } from "./components/filters/FilterBar";
import { GAMES, type Game } from "./data/games";
import { GameDetailModal } from "./components/games/GameDetailModal";

function uniqueSorted(list: string[]) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b, "zh-CN"));
}

function platformTokens(platform: string) {
  return platform
    .split(/[\/|,]/g)
    .map((s) => s.trim())
    .filter(Boolean);
}

function intersects(a: string[], b: string[]) {
  if (a.length === 0 || b.length === 0) return false;
  const setB = new Set(b);
  return a.some((x) => setB.has(x));
}

// 交集过滤：跨维度 AND；同维度多选 OR
function filteredGames(games: Game[], filters: FilterBarValue) {
  return games.filter((g) => {
    const pTokens = platformTokens(g.platform);
    const platformOk =
      filters.platforms.length === 0 || intersects(filters.platforms, pTokens);
    const developerOk =
      filters.developers.length === 0 || filters.developers.includes(g.developer);
    const genreOk =
      filters.genres.length === 0 || intersects(filters.genres, g.genre);
    return platformOk && developerOk && genreOk;
  });
}

const App: React.FC = () => {
  const [filters, setFilters] = React.useState<FilterBarValue>({
    platforms: [],
    developers: [],
    genres: []
  });
  const [toast, setToast] = React.useState<{ id: number; text: string } | null>(
    null
  );
  const toastTimerRef = React.useRef<number | null>(null);

  const [selectedGame, setSelectedGame] = React.useState<Game | null>(null);

  const filterOptions: FilterBarOptions = React.useMemo(() => {
    const platforms = uniqueSorted(
      GAMES.flatMap((g) => platformTokens(g.platform))
    );
    const developers = uniqueSorted(GAMES.map((g) => g.developer));
    const genres = uniqueSorted(GAMES.flatMap((g) => g.genre));
    return { platforms, developers, genres };
  }, []);

  const games = React.useMemo(() => filteredGames(GAMES, filters), [filters]);

  const showMatchToast = React.useCallback((count: number) => {
    if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    const id = Date.now();
    setToast({ id, text: `当前匹配到 ${count} 个游戏` });
    toastTimerRef.current = window.setTimeout(() => setToast(null), 1200);
  }, []);

  React.useEffect(() => {
    return () => {
      if (toastTimerRef.current) window.clearTimeout(toastTimerRef.current);
    };
  }, []);

  const handleFilterChange = React.useCallback(
    (next: FilterBarValue) => {
      setFilters(next);
      const count = filteredGames(GAMES, next).length;
      showMatchToast(count);
    },
    [showMatchToast]
  );

  return (
    <Shell>
      <AnimatePresence>
        {toast ? (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.99 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-1/2 top-5 z-[60] -translate-x-1/2"
          >
            <div className="rounded-full border border-cyan-300/25 bg-white/5 px-4 py-2 text-xs text-slate-100 shadow-[0_0_26px_rgba(34,211,238,0.10)] backdrop-blur-xl">
              <span className="text-slate-200/90">{toast.text}</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-1 flex-col gap-8"
      >
        {/* 顶部总览数据统计 */}
        <StatHeader />

        {/* 中部：游戏列表网格 */}
        <section className="mt-0 flex-1">
          <div className="space-y-4">
            <div className="sticky top-0 z-50 -mx-4 sm:-mx-6 lg:-mx-10">
              <div className="relative px-4 pb-3 pt-3 sm:px-6 lg:px-10">
                <div className="pointer-events-none absolute inset-0 bg-slate-900/55 backdrop-blur-xl" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/25 to-transparent" />
                <div className="relative">
                  <FilterBar
                    value={filters}
                    options={filterOptions}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>
            </div>
            <GameGrid games={games} onSelect={setSelectedGame} />
          </div>
        </section>
      </motion.div>

      <GameDetailModal
        open={!!selectedGame}
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />
    </Shell>
  );
};

export default App;
