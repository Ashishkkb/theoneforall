import dynamic from 'next/dynamic';
const MouseFollowerHome = dynamic(() => import ("./../components/mousefollower"), {
  ssr: false
}) ;

export default function Home() {

  return (
    <div> 
      <MouseFollowerHome />
    </div>
  );
}
