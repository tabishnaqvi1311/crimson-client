type ProgressBarProps = {
    currentStepIdx: number;
    totalSteps: number;
}

export default function ProgressBar({
    currentStepIdx,
    totalSteps
}: ProgressBarProps
){
    const progress = ((currentStepIdx+1) / totalSteps) * 100;

    return (
        <div 
            className={`fixed top-[calc(4rem+1rem)] left-0 border-2 border-primary transition-all duration-150`} style={{width: `${progress}%` }}/>
    )
}