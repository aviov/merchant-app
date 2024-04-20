import Link from 'next/link'

type PushScanProps = {
  token: string;
};

const PushScan: React.FC<PushScanProps> = ({ token }) => {
  return (
    <div className="w-80 h-[568px] pl-[103px] pr-[102px] bg-white flex-col justify-center items-center inline-flex">
      <div className="self-stretch px-[30px] py-5 bg-blue-600 rounded-2xl justify-center items-center gap-2.5 inline-flex">
        <Link
          className="text-center text-white text-2xl font-bold font-['Avenir Next LT Pro']"
          href='/scanCode'>
            Scan
        </Link>
      </div>
    </div>
  );
};

export default PushScan;