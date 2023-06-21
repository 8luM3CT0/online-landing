//front-end
import React from 'react'
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../'
//back-end
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { creds, store } from '../../../backend/firebase'

function IndArticles ({ db }) {
  return (
    <div key={db?.id} id={db?.id} className='desktopIndArticle'>
      {/**article image as background if existing; else use bg-placeholder */}
      {db?.data()?.articleImage ? (
        <div
          className='
        w-full
        h-full
        bg-cover
        bg-no-repeat
        '
          style={{
            backgroundImage: `url(${db?.data()?.articleImage})`
          }}
        ></div>
      ) : (
        <div
          className='
        w-full
        h-full
        bg-cover
        bg-no-repeat
        bg-placeholder
        '
        ></div>
      )}
    </div>
  )
}

export default IndArticles
