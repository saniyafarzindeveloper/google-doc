import React from 'react'
import Editor from './editor'
import Toolbar from './toolbar'

export default function DocumentIdPage() {
  return (
    <div className='min-h-screen bg-[#FAFBFD]'>
      <Toolbar />
      <Editor />
    </div>
  )
}
