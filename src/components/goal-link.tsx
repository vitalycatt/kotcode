"use client";

import { trackGoal } from "@/lib/analytics";

type GoalLinkProps = React.ComponentProps<"a"> & {
  goal: string;
  goalParams?: Record<string, unknown>;
};

/** Обычная ссылка <a>, которая шлёт цель в Метрику по клику. */
export function GoalLink({
  goal,
  goalParams,
  onClick,
  children,
  ...props
}: GoalLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackGoal(goal, goalParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
