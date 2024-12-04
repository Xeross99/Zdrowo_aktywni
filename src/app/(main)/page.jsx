import Image from 'next/image';
import img1 from '@/images/sport/img1.jpg';
import img2 from '@/images/sport/img2.jpg';
import img3 from '@/images/sport/img3.jpg';
import img4 from '@/images/sport/img4.jpg';

export default function Home() {
  return (
    <div id="aktywność" className="overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Strona na rozgrzewce!</h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Aktualnie przygotowujemy tę stronę do maratonu Twojej uwagi. 💪
              Trening trwa, ale niedługo będziemy gotowi do wielkiego startu!
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Każdy projekt wymaga wytrwałości i determinacji, tak jak bieganie – krok po kroku, do celu. 
              Daj nam chwilę, a staniemy na podium Twoich ulubionych stron!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image src={img1} alt="" className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image src={img4} alt="" className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"/>
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image src={img3} alt="" className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover object-top"/>
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image src={img2} alt="" className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
