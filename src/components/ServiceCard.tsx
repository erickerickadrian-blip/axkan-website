import { motion } from "motion/react";
import { Sparkles, Bot, BarChart3, TrendingUp, Users, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  bot: Bot,
  chart: BarChart3,
  trending: TrendingUp,
  users: Users,
  eye: Eye,
};

export function ServiceCard({
  icon,
  title,
  desc,
  tags,
}: {
  icon: string;
  title: string;
  desc: string;
  tags: readonly string[];
}) {
  const Icon = icons[icon] ?? Sparkles;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col rounded-xl border border-border/70 bg-card/50 p-6 transition-colors hover:border-cyan-400/40"
    >
      <div className="mb-4 grid size-11 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400 transition-colors group-hover:bg-cyan-400/20">
        <Icon className="size-5" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
