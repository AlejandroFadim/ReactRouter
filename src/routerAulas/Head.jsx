import React from 'react'

const Head = (props) => {
  React.useEffect(() => {
    document.querySelector('meta[name="description"]').setAttribute('content', props.description)
    document.title = props.title
    console.log(props)
  }, [props])

  return (
    <>
      
    </>
  )
}

export default Head
