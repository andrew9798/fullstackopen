import Part from "./part"

const Content = ({ parts }) => {

    return (
        <>
            {parts.map(part => (
                <Part  part={part.name} exercises={part.exercises} />
            ))}
        </>
    )
}
export default Content
