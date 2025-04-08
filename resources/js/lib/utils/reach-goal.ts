export function reachGoal(goal: string) {
    if (typeof ym === 'function') {
        ym(100817534, 'reachGoal', goal);
    }
}

declare const ym: (counterId: number, action: 'reachGoal' | string, target?: string, params?: Record<string, unknown>) => void;
