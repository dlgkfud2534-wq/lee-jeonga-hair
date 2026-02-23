'use client'

const steps = [
  { value: 0, label: '전체' },
  { value: 1, label: 'STEP 1 클렌징' },
  { value: 2, label: 'STEP 2 샴푸' },
  { value: 3, label: 'STEP 3 두피팩' },
  { value: 4, label: 'STEP 4 모발팩' },
  { value: 5, label: 'STEP 5 앰플' },
  { value: 6, label: 'STEP 6 마무리' },
]

export default function StepFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {steps.map(step => (
        <button
          key={step.value}
          onClick={() => onSelect(step.value)}
          className={`px-4 py-2 text-xs font-medium tracking-wide transition-all ${
            selected === step.value
              ? 'bg-accent text-white'
              : 'bg-offwhite text-darkgray hover:bg-lightgray'
          }`}
        >
          {step.label}
        </button>
      ))}
    </div>
  )
}
