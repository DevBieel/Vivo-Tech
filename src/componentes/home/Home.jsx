import React from 'react'
import Header from "./header/Header"
import Main from "./main/Main"

export default function Home(props) {
  return (
    <>
        <Header
        linkPag = {props.linkPag}
        />
        <Main/>
    </>
  )
}
