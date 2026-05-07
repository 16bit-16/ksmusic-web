interface TimelineProps {
    current: string
    total: string
}

export default function Timeline({ current, total }: TimelineProps) {
    const toSec = (t: string) => {
        const [m, s] = t.split(':').map(Number)
        return m * 60 + s
    }
    
    const cur = toSec(current)
    const tot = toSec(total)
    const percent = tot > 0 ? (cur / tot) * 100 : 0

    return (
        <div className="flex flex-col gap-3">
            <div className="w-full h-2 bg-zinc-600 rounded-full relative">
                <div 
                    className="h-full bg-purple-500 rounded-full relative"
                    style={{ width: `${percent}%` }}
                >
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-100 rounded-full shadow-md" />
                </div>
            </div>
            <div className="flex justify-between text-zinc-300">
                <p>{current}</p>
                <p>{total}</p>
            </div>
        </div>
    )
}