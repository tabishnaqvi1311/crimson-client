import { ReactNode, useState } from "react"

/**
 * custom hook for managing multi-step forms.
 * @param {Array} steps - An array of react components each pointing to a part of the form
 * @returns {Object} An object containing functions and state variables for managing the form.
 * - current step index
 * - step
 * - next, back, goTo for navigating to a step, takes an index
 * - isfirstStep
 * - isLast step
 * - steps 
 */
export const useMultiForm = (steps: ReactNode[]) => {
    const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);

    const next = () => {
        setCurrentStepIdx(i => {
            if(i >= steps.length - 1) return i;
            return i+1;
        })
    }

    const back = () => {
        setCurrentStepIdx(i => {
            if(i <= 0) return i;
            return i-1;
        })
    }

    const goTo = (idx: number) => {
        setCurrentStepIdx(idx);
    }

    return {
        currentStepIdx,
        step: steps[currentStepIdx],
        isFirstStep: currentStepIdx === 0,
        isLastStep: currentStepIdx === steps.length - 1,
        next,
        back,
        goTo,
        steps,
    }
}