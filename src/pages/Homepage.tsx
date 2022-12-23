import React, { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import cuid from "cuid";

import Dropzone from "../components/Dropzone";
import { WallImageData, Wall } from "../components/Wall";

import d1 from '../resources/images/dummy/d1.jpg';
import d2 from '../resources/images/dummy/d2.jpg';
import d3 from '../resources/images/dummy/d3.jpg';
import d4 from '../resources/images/dummy/d4.jpg';


const dummy_images: WallImageData[] = [
  { id: cuid(), src: d1 },
  { id: cuid(), src: d2 },
  { id: cuid(), src: d3 },
  { id: cuid(), src: d4 },
  { id: cuid(), src: d4 },
  { id: cuid(), src: d4 },
  { id: cuid(), src: d3 },
  { id: cuid(), src: d3 },
  { id: cuid(), src: d4 },
  { id: cuid(), src: d4 },
]

// Swap two images in the array
const swap = (idx1: number, idx2: number, array: WallImageData[]): WallImageData[] => {
  const arr = [... array];
  console.log("before", arr[idx1], arr[idx2]);
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  console.log("after", arr[idx1], arr[idx2]);
  return arr
}

const Homepage = () => {
  // var imgs = dummy_images;
  var imgs = swap(0, 1, dummy_images);

  const [images, setImages] = useState(imgs);


  const onDrop = useCallback((acceptedFiles: any): void => {
    // Implement this: https://blog.logrocket.com/drag-and-drop-react-dnd/
    console.log(acceptedFiles);
  }, []);

  return (
    <main className="homepage" >
      <Dropzone onDrop={onDrop} accept={{
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg']
      }}></Dropzone>
      <DndProvider backend={HTML5Backend}>
        <Wall images={images} />
      </DndProvider>
    </main>
  )
}

export default Homepage;