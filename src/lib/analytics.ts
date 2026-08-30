/**
 * Отправка цели в Яндекс.Метрику. Безопасно: если счётчик не подключён
 * (нет ID или ym ещё не загрузился) — тихо ничего не делает.
 */
declare global {
  interface Window {
    ym?: (
      counterId: number,
      action: string,
      ...args: unknown[]
    ) => void;
  }
}

const COUNTER_ID = Number(process.env.NEXT_PUBLIC_YANDEX_METRICA_ID);

export function trackGoal(goal: string, params?: Record<string, unknown>) {
  if (!COUNTER_ID || typeof window === "undefined" || !window.ym) return;
  window.ym(COUNTER_ID, "reachGoal", goal, params);
}
