import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import footerContact from "../api/footerContact.json"
export const Footer = () => {
  const iconMap = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }
  return (
    <>
    <footer className="footer bg-black text-white border-t-[0.1px] border-t-white h-auto p-8 ">
      <div className="grid grid-cols-3 place-items-center ">
        {
          footerContact.map((curElem) => {
            const { icon, title, details } = curElem;
            return (
              <>
                <div className="flex justify-center gap-3">
                  <div className="text-blue-900 w-10 h-10 text-4xl mt-1">{iconMap[icon]} </div>
                  <div className="pb-1">
                    <p className="text-base font-bold pb-1">{title}</p>
                    <p className="text-sm text-gray-400">{details}</p>
                  </div>
                </div>

              </>
            )
          })
        }
      </div>
    </footer>
    {/* <div className="bg-zinc-950 h-16 text-sm text-gray-400 pt-4 px-48 flex justify-between">
        <p>All rights reversed</p>
        <div className="flex justify-center gap-6 ">
          <p>Terms</p>
          <p>Privacy</p>
          <p>compliances</p>
        </div>
      </div> */}
</>
  )
}
export default Footer