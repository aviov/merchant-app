import Link from 'next/link';

export default function ScanCode(){
  return (
    <div className="w-80 h-[568px] px-[84px] bg-white flex-col justify-center items-center inline-flex">
      <Link
        className="w-[152px] h-[150px]"
        href='/success'
      >
        <img
          src="https://via.placeholder.com/152x150"
        />
      </Link>
    </div>
  );
};
