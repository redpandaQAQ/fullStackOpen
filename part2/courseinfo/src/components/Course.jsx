const Header = ({ header }) => {
  return (
    <h2>{header}</h2>
  )
}
const Content = ({ parts }) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} part={part} />)}
      <Total parts={parts} />
    </>

  )
}
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )

}
const Total = ({ parts }) => {
  const sum = parts.reduce(
    (acc, current) => acc + current.exercises, 0
  )
  return <b>total of {sum} exercises</b>
}
const Courses = ({ courses }) => {
  const result = courses.map(c =>
    <div key={c.id}>
      <Header header={c.name} />
      <Content parts={c.parts} />
    </div>)
  return (
    <>
      {result}
    </>
  )
}
export default Courses