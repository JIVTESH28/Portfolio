import { RiReactjsLine } from "react-icons/ri"
// import { TbBrandNextjs } from "react-icons/tb" 
import { SiMongodb } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiTypescript } from "react-icons/si"
// import { IoLogoGithub } from "react-icons/io5"
import { FaGitAlt } from "react-icons/fa"
const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTypescript className="text-7xl text-sky-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-orange-600"/>
            </div>
        </div>
    </div>
  )
}

export default Tech