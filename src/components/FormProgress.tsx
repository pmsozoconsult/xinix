"use client";

import { cn } from "@/lib/utils";

export interface FormStep {
  id: string;
  label: string;
  done: boolean;
}

interface FormProgressProps {
  steps: FormStep[];
  onStepClick: (id: string) => void;
  label: string;
}

export function FormProgress({ steps, onStepClick, label }: FormProgressProps) {
  const complete = steps.filter((step) => step.done).length;

  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.16em] text-stone">
        <span>{label}</span>
        <span className="font-mono text-xinix-blue">
          {complete}/{steps.length}
        </span>
      </div>
      <div className="flex gap-1" role="group" aria-label="Form progress">
        {steps.map((step) => (
          <button
            key={step.id}
            type="button"
            title={step.label}
            aria-label={step.label}
            onClick={() => onStepClick(step.id)}
            className={cn(
              "h-2 flex-1 rounded-sm ring-1 transition",
              step.done
                ? "bg-xinix-blue ring-xinix-blue/30"
                : "bg-white ring-line hover:bg-sky-band/80",
            )}
          />
        ))}
      </div>
    </div>
  );
}
