
type Props = {
    children: React.ReactNode
}

export function Content(props: Props) {
    return (
        <div className="max-w-[600px] w-[80%] max-h-[calc(100vh-48px)] mt-6 mb-6 overflow-auto scrollbar-hide bg-purple-400 rounded-2xl p-4">
            {props.children}
        </div>
    )
}