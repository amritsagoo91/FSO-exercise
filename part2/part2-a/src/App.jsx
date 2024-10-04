import { useState } from 'react'

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Header = ({ name }) => <h1>{name}</h1>
const Content = ({ parts }) => {
  return (
    <>
      {
        parts.map((part) => <Part key={part.id} part={part} />)
      }
    </>
  )
}

const Total = ({ parts }) => {
  return (
    <h4>
      Total of {parts.reduce((sum, part) => sum += part.exercises, 0)} exercises
    </h4>
  )
}

const Course = ({ course }) => {
  return (<>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </>)
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App