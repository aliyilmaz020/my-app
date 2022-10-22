import '../index.css'
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
export default function TopBar() {

  return(
    <div className='bg-white h-[72px] w-full flex p-5 gap-4 place-items-center whitespace-nowrap '>
      <img height={34} width={91} alt= '' src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"  />
      <p>Kategoriler</p>

      <form className='w-full'>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dilediğiniz şeyi arayın" required="" />
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ara</button>
                </div>
            </form>

      <p>Udemy Business</p>
      <p>Udemy'de Eğiitim Verin</p>
      <p>Öğrenim İçeriğim</p>
      <AiOutlineShoppingCart size = {48}/>
      <AiOutlineHeart size = {48} />
      <AiOutlineBell size = {48}/>



    </div>
  )

 }