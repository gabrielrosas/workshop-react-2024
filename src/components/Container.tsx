
type Props = {
    children: React.ReactNode
}

export function Container(props: Props) {
    return (
        <div className="w-screen h-screen flex flex-col justify-start items-center">
            {props.children}
        </div>
    )
}