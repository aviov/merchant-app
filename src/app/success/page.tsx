import Link from 'next/link';

const Succes = () => {
  return (
    <div className="w-80 h-[568px] px-[89px] bg-white flex-col justify-center items-center inline-flex">
      <div className="rounded-full h-[200px] w-[200px] bg-green-400 rounded-[100px] justify-center items-center gap-2.5 inline-flex">
        <Link
          className="text-center text-white text-2xl font-bold font-['Avenir Next LT Pro']"
          href="/success"
        >
          Success
        </Link>
      </div>
    </div>
  );
};

export default Succes;