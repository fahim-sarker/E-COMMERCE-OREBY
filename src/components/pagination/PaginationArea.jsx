import React from 'react'

const PaginationArea = ({pagenumber,paginate,currentpage,next,prev}) => {
  return (
    <>
  <nav aria-label="Page navigation example">
    <ul className="inline-flex -space-x-px text-sm cursor-pointer">
      <li onClick={prev}>
        <a
          className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300"
        >
          Previous
        </a>
      </li>
      {pagenumber.map((item,i)=>(
      <li onClick={()=>paginate(item)} className={currentpage == i +1 ? "flex items-center justify-center px-4 h-8 leading-tight text-white bg-[#262626] border border-gray-300 " : "flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300"}>
          {item + 1}
      </li>
      ))}
      <li onClick={next}>
        <a
          className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 "
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</>

  )
}

export default PaginationArea
