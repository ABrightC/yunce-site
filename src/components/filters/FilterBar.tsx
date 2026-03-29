import React from "react";
import { Gamepad2, Monitor, RotateCcw, Smartphone } from "lucide-react";

export type FilterBarValue = {
  platforms: string[];
  developers: string[];
  genres: string[];
};

export type FilterBarOptions = {
  platforms: string[];
  developers: string[];
  genres: string[];
};

export type FilterBarProps = {
  value: FilterBarValue;
  options: FilterBarOptions;
  onChange: (next: FilterBarValue) => void;
  onReset?: () => void;
};

function toggle(list: string[], item: string) {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

function BadgeButton({
  selected,
  children,
  onClick
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative inline-flex shrink-0 items-center justify-center rounded-full px-2.5 py-1 text-[0.7rem]",
        "uppercase tracking-[0.18em] transition will-change-transform",
        "backdrop-blur-md",
        selected
          ? [
              "bg-cyan-300/10 text-cyan-100 ring-1 ring-cyan-300/70",
              "shadow-[0_0_18px_rgba(34,211,238,0.28)]",
              "hover:bg-cyan-300/14 hover:shadow-[0_0_24px_rgba(34,211,238,0.36)]"
            ].join(" ")
          : [
              "bg-white/5 text-slate-300 ring-1 ring-white/10",
              "hover:bg-white/7 hover:text-slate-100 hover:ring-cyan-300/30"
            ].join(" ")
      ].join(" ")}
    >
      {selected ? (
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-cyan-300/30 animate-pulse" />
      ) : null}
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function Group({
  label,
  items,
  selected,
  onToggle,
  renderItem
}: {
  label: string;
  items: string[];
  selected: string[];
  onToggle: (item: string) => void;
  renderItem?: (item: string) => React.ReactNode;
}) {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
        {label}
      </p>
      <div className="flex items-center gap-2">
        {items.map((item) => (
          <BadgeButton
            key={item}
            selected={selected.includes(item)}
            onClick={() => onToggle(item)}
          >
            {renderItem ? renderItem(item) : item}
          </BadgeButton>
        ))}
      </div>
    </div>
  );
}

function platformChip(item: string) {
  const v = item.toLowerCase();
  const Icon =
    v === "pc" || v === "steam"
      ? Monitor
      : v === "mobile"
        ? Smartphone
        : v === "switch" || v === "playstation" || v === "xbox" || v === "console"
          ? Gamepad2
          : Monitor;

  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-cyan-200/90" />
      <span>{item}</span>
    </span>
  );
}

export const FilterBar: React.FC<FilterBarProps> = ({
  value,
  options,
  onChange,
  onReset
}) => {
  const reset = () => {
    onChange({ platforms: [], developers: [], genres: [] });
    onReset?.();
  };

  return (
    <div className="rounded-2xl border border-cyan-300/30 bg-white/5 p-3 shadow-[0_0_28px_rgba(34,211,238,0.08)] backdrop-blur-xl">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="w-14 shrink-0">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
              平台
            </p>
          </div>
          <div className="flex-1 overflow-x-auto overflow-y-visible pl-2 pt-1 [-webkit-overflow-scrolling:touch]">
            <div className="flex items-center gap-2 pb-1 pr-2">
              {options.platforms.map((item) => (
                <BadgeButton
                  key={item}
                  selected={value.platforms.includes(item)}
                  onClick={() =>
                    onChange({
                      ...value,
                      platforms: toggle(value.platforms, item)
                    })
                  }
                >
                  {platformChip(item)}
                </BadgeButton>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        <div className="flex items-center gap-3">
          <div className="w-14 shrink-0">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
              开发商
            </p>
          </div>
          <div className="flex-1 overflow-x-auto overflow-y-visible pl-2 pt-1 [-webkit-overflow-scrolling:touch]">
            <div className="flex items-center gap-2 pb-1 pr-2">
              {options.developers.map((item) => (
                <BadgeButton
                  key={item}
                  selected={value.developers.includes(item)}
                  onClick={() =>
                    onChange({
                      ...value,
                      developers: toggle(value.developers, item)
                    })
                  }
                >
                  {item}
                </BadgeButton>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        <div className="flex items-center gap-3">
          <div className="w-14 shrink-0">
            <p className="text-[0.7rem] uppercase tracking-[0.28em] text-slate-400">
              类型
            </p>
          </div>
          <div className="flex-1 overflow-x-auto overflow-y-visible pl-2 pt-1 [-webkit-overflow-scrolling:touch]">
            <div className="flex items-center gap-2 pb-1 pr-2">
              {options.genres.map((item) => (
                <BadgeButton
                  key={item}
                  selected={value.genres.includes(item)}
                  onClick={() =>
                    onChange({ ...value, genres: toggle(value.genres, item) })
                  }
                >
                  {item}
                </BadgeButton>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={reset}
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-full",
              "bg-slate-950/25 text-slate-200 ring-1 ring-cyan-300/35",
              "transition hover:text-cyan-100 hover:ring-cyan-300/70",
              "hover:shadow-[0_0_22px_rgba(34,211,238,0.24)]"
            ].join(" ")}
            aria-label="Reset filters"
            title="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

