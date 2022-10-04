import React from 'react'

function TitlePage({title , span , subtitle}) {
  return (
    <hGroup>
        <h1>{title} <span>{span}</span></h1>
        <h2>{subtitle}</h2>

    </hGroup>
  )
}

export default TitlePage