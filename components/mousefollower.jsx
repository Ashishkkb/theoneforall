import dynamic from 'next/dynamic';
import { useState } from 'react';

const mouseFollower = import('../utils/mouseFollower').then((module) => {
  return module.default;
} , );


export default function MouseFollowerHome() {
  const [showMouseFollowerWithText, setShowMouseFollowerWithText] = useState(false);
  const [showMouseFollowerWithoutText, setShowMouseFollowerWithoutText] = useState(false);

  async function handleMouseEnterWithText() {
    const cursor = await mouseFollower;
    cursor.show();
    cursor.setText('Ektaa');
    setShowMouseFollowerWithText(true);
  }

  async function handleMouseEnterWithoutText() {
    const cursor = await mouseFollower;
    cursor.show();
    cursor.setText('Ashish');
    setShowMouseFollowerWithoutText(true);
  }

  async function handleMouseLeave() {
    const cursor = await mouseFollower;
    cursor.removeText()
    setShowMouseFollowerWithText(false);
    setShowMouseFollowerWithoutText(false);
  }

  const handleMouseEnter = async () => {
    const cursor = await mouseFollower;
    (cursor).show();
  };

  return (
    <div>
      <div className="flex h-screen" id='main' onMouseEnter={handleMouseEnter}>
        {/* Column 1: Text is Visible */}
        <div className="w-1/2 p-4 h-[200px]">
          <div
            onMouseEnter={handleMouseEnterWithText}
            onMouseLeave={handleMouseLeave}
            className="h-[200px]"
            id="hover"
          >
            Hover me to change cursor text!
          </div>
        </div>

        {/* Column 2: No Text, Mouse Follower Visible */}
        <div className="w-1/2 p-4 h-[200px]">
          <div
            onMouseEnter={handleMouseEnterWithoutText}
            onMouseLeave={handleMouseLeave}
            className="h-[200px]"
            id="hover2"
          >
            Hover me without text with Mouse Follower!
          </div>
        </div>
      </div>
    </div>
  );
}
