import React from 'react'
import style from "./Banner.module.css"


const Banner = () => {
  return (
    <>
    
    <div className={`w-100 h-[780px] bg-color-1 relative overflow-hidden`}>
<div className={` bg-color-3 w-[315px] h-[315px] ${style.blurcircle} absolute top-4 left-8`}>
</div>
<div className={` bg-color-3 w-[315px] h-[315px] ${style.blurcircle} absolute top-4 right-8`}>
</div>
<div className={` bg-color-3 w-[315px] h-[315px] ${style.blurcircle} absolute bottom-1 right-[56rem]`}>
</div>

<div className={`bg-color-3  min-w-[600px] min-h-[600px] overflow-hidden ${style.animationvideo} absolute right-[6rem] top-[90px]`}>


</div>

<div className={` min-w-[900px] min-h-[600px] overflow-hidden  absolute left-[6rem] top-[90px]`}>

<div className={`${style.nameStrock}`}>
  I AM ABHISHEK A S
</div>

</div>





    </div>
    
    </>
  )
}

export default Banner