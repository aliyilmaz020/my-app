import '../index.css'
import Carousel from 'better-react-carousel'
import Card12 from './Card12'

export default function SecondBar() {
  return (
    <div className='px-16 py-0 bg-white h-[40px] w-full gap-3 whitespace-nowrap'>
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

      {/* <div className=' justify-between px-0 relative pl-20 pr-16 pt-0 '> */}
      <div className=' justify-between px-0 relative '>
        <img className='h-full w-full' width="1340" height="400" alt=""
          src="https://img-c.udemycdn.com/notices/featured_banner/image_udlite/542775ce-985d-4103-8f86-1bfc28afb29d.jpg" />
        <div className='ImageBox absolute left-0 top-0'>
          <h1 className=' text-base text-justify font-bold font-serif font-700' > ALİ, sizi özledik </h1>
          <h2 className='text-justify '>
            <a className='text-[#5624d0]' href='https://www.udemy.com/home/my-courses/learning/?locale=tr_TR'>
              <u>Öğrenmeye devam edin</u> </a>
            ve hedeflerinize ulaşın. Her <br />gün 5-10 dakika ayırmanız yeterli. </h2>
        </div>
      </div>



      <div className='flex justify-between	'>
        <h1 className='font-bold 	 '><br />ALİ, öğrenmeye başlayalım</h1>
        <h2 className='font-bold underline text-[#5624d0]'><a href="https://www.udemy.com/home/my-courses/"><br />Öğrenim İçeriğim</a></h2>
        {/*  */}

      </div>

      <div className='p-6'>

        <Carousel cols={3} rows={1} gap={5} loop >
          <Carousel.Item>
            <Card12 image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgs54Q-jQVqoJvCnKquQZHbaXMwWNxgKj5Ua4vCNqCXqRnbth0l2Z8AzNAewMWTygABkQ&usqp=CAU2'}
              title={"C# İle 25 Derste 25 Uygulamalı Proje"}
              subtitle={"1. Course welcome and instructor introductions"} />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 image={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dailysabah.com%2Fsports%2Ffootball%2Fnetflix-documentary-on-fatih-terim-to-hit-screens-on-sept-15&psig=AOvVaw3Ia4Jm2zd0I73I46-_1Y-I&ust=1667232580284000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCOj798WriPsCFQAAAAAdAAAAABAD'}
              title={'FT > JJ'}
            />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 />
          </Carousel.Item>

          <Carousel.Item>
            <Card12 />
          </Carousel.Item>

          <Carousel.Item>
            <img width={267} height={150} alt="" src="https://mp4-c.udemycdn.com/2021-02-26_18-16-55-2077f2b420d6cee78846732b169579de/1/thumb-1.jpg?Expires=1667152106&Signature=k3AtTjTfptWlLL8CqPqpgIkrBhq2l9r7FoCVteXqA-xL1Ho~60bnzT690KjqdjgAgJtcFKZHRG~5vSaa2bLUG78I8xF3F~X0bjBNUVpmoidbLpMVK3mVNLNnSae5HcazmEsCicK-lKCYcv6Ze5o4klXNSSr3QA1G~FteZgFg5mU8jGS8Zyza54EvnDsI0ohHJOyMb0YSphscCbHMeSZX6wJyGRawGlZSlbuAMBdPpOOxf0vSsNYNzBXNuR3~sSURAZreCUxmDn8HTlvPSDABKBWNmww3reLf8qLOxg1JY02myAmfcO9K06sd8GV4YqYqJaFFIc13Lw0yoMMnZ5LzkA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
          </Carousel.Item>

          <Carousel.Item>
            <img width={267} height={150} alt="" src="https://mp4-c.udemycdn.com/2021-01-14_19-23-34-3fbffaebf30727c8b1d7061a19ee25ae/1/thumb-1.jpg?Expires=1667152106&Signature=Ik45KmsjRj1KAE38B7BlclrWtJdtey7jdNYNeSm1ZYeBCIo1IrZdwsPRnZh6yODYjWcYNtHmMq0dVGFiHOIjbuPgVVTr7~ytKq42a-GUHlKWpDDN90-h0kxnYKX0gJLgJVkbV4b~yajbbK4iehsWVFD-CHF0XoopsE~mu0EogqsHVi9ucNxgaJ4g3Vsm~7AXI3aPlKLwwpYMc5oxhG44QLBebsKhBDA~462qxeaKwlNZua6ndoKNasAj9wpTZCFOiXL5wwdC9Dyh6b8M98-7cMv1cwp9q3LvcVSMcHm7bSN5wuKJmAVKZCI4Oxj7ql3wMVswCt6-~dtJLM7liCfzuA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
          </Carousel.Item>

          <Carousel.Item>
            <img width={267} height={150} alt="" src="https://mp4-c.udemycdn.com/2021-06-23_06-13-51-ac4242803c4b041920902e04610b9de9/1/thumb-1.jpg?Expires=1667152106&Signature=dRW0cEIF4DNCO-ORGvSHAn1OUyqFOSONmjIfevTnQLKndJyGZ7WD2aQTXlHugs-04dGmKE7oOg9Gorfv4lm77dB9F03ZXwf80XwpAZvMoFOygN2vJSEWRuE3SFKbE14b~j36KSc1Y8oFXh5HlgkOA2dekiFqy7CEKG5549tePubUyzrDLUXkf-ZwBPEPudM9j0YL4cZQ-MTMXQ-tRgq-oK4BmpmT8rMhrX8p8BAr6wdNqsB8mdtVmEmxxjlpfxvjy4An6LUkW8sn2jkABB9R0EZG-SFGElNUvjDCCLNAPVPzQDVC7shtThVaGNbAsuCcGWR26zXbVZUbJdhgdak65g__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
          </Carousel.Item>

          <Carousel.Item>
            <img width={267} height={150} alt="" src="https://mp4-c.udemycdn.com/2019-03-08_20-10-25-69fe34a21bfe558ef15eb7dc5b53d130/thumb-1.jpg?Expires=1667152107&Signature=l11m~iy~cu7YTye7v-NTdeCklt7gBfPIdtOunu9MtNxWpKsr83J6jet8-27BMTBcTJXi1ObTdGr97xRYozklGXb2qBgVQ7-bOmO0i0jcIgJsFIntXhRYuGySxwQ~8iG4dtCFh4wO4tw16R7vG2u~jKWN7mYsHJxaYbT0ZBZWPwhUqGyFoN3dfcfzMAvoLxWkxgBaTs-UwMfgbMf1SVa6L5B4TK6bHJPDwMH-Y-nhpNScz-27uBxtdFZ0wEOh-39Y1dyXmYKtAygGudrHYgsXH8du2XQZPPqmmgomKjgNz35jb8lE9usYVezYxi~O~2iQglj8ZDUVLuBDj2r0v9NZeA__&Key-Pair-Id=APKAITJV77WS5ZT7262A" />
          </Carousel.Item>

        </Carousel>

      </div>












    </div >

  )
}