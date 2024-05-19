import React from 'react'

const PaginationArea = ({pagenumber,paginate,nextginate}) => {
    console.log(pagenumber);
  return (
    <>
  <nav aria-label="Page navigation example">
    <ul className="inline-flex -space-x-px text-sm">
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white py-6"
        >
          Previous
        </a>
      </li>
      {pagenumber.map((item)=>(
      <li onClick={()=>paginate(item)}>
        <a
          className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-[#262626] hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white py-6"
        >
          {item + 1}
        </a>
      </li>
      ))}
      <li onClick={()=>nextginate(item)}>
        <a
          className="flex items-center justify-center px-4 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white py-6"
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
