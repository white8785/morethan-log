import CONFIG from 'morethan-log.config'
import React from 'react'
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlinePicture,
  AiFillRedditCircle,
  AiFillRedditSquare,
  AiFillProfile,
  AiFillFileWord,
  AiFillFileText,
} from 'react-icons/ai'

// add resume link, cyber art link and organize
function Contact() {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💬 the meta</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.twitter && (
          <a
            href={`https://twitter.com/${CONFIG.profile.twitter}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineTwitter className="text-2xl flex-shrink-0" />
            <div className="text-sm">{CONFIG.profile.twitter}</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineInstagram className="text-2xl" />
            <div className="text-sm">@{CONFIG.profile.instagram}</div>
          </a>
        )}
        {CONFIG.profile.art && (
          <a
            href={CONFIG.profile.art}
            rel="noreferrer"
            target="_blank"
            className="p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlinePicture className="text-2xl" />
            <div className="text-sm">@{CONFIG.profile.art}</div>
          </a>
        )}
        {CONFIG.profile.resume && (
          <a
            href={CONFIG.profile.resume}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillFileText className="text-2xl flex-shrink-0" />
            <div className="text-sm">resume</div>
          </a>
        )}
      </ul>
    </>
  )
}

export default Contact
