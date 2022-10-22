import '../index.css'

export default function SecondBar() {
  return(
    <div className='px-16 py-0 bg-white h-[40px] w-full gap-3 whitespace-nowrap '>
      <ul className='flex w-full h-[40px]'>
      <p className='pl-32'>Yazılım Geliştirme</p>
      <p>İşletme</p>
      <p>Finans ve Muhasebe</p>
      <p>BT ve Yazılım</p>
      <p>Ofiste Verimlilik</p>
      <p>Kişisel Gelişim</p>
      <p>Tasarım</p>
      <p>Pazarlama</p>
      <p>Sağlık ve Fitness</p>
      <p>Müzik</p>

      </ul>
      <div className=' justify-between  px-0'>
                <img className='pl-20 pr-16 pt-0 h-full w-full' width="1340" height="400" alt=""
                src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/542775ce-985d-4103-8f86-1bfc28afb29d.jpg" />
      </div>

      <div className='ImageBox'>

        <h1  className=' text-base text-justify font-bold font-serif font-700' > ALİ, sizi özledik </h1>
        <h2 className='text-justify '>
          <a className='text-[#5624d0]' href='https://www.udemy.com/home/my-courses/learning/?locale=tr_TR'>
            <u>Öğrenmeye devam edin</u> </a>
              ve hedeflerinize ulaşın. Her <br/>gün 5-10 dakika ayırmanız yeterli. </h2>


      </div>














    </div>

  )
}