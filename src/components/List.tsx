
type Props = {
    children: React.ReactNode
}
export function List(props: Props) {
    return (
        <div className="flex flex-col justify-start items-center mt-4">
            {props.children}
        </div>
    )
}