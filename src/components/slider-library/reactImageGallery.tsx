"use client";

import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import LeftNav from "./leftNav";
import RightNav from "./rightNav";

function renderItem(props: Props) {
  return (
    <div className=" w-full mb-2 h-[250px] sm:h-[290px] xl:h-[280px] rounded-[12px] bg-green-500">
      <div className="flex flex-row h-full ">
        <img src={props.imgSrc} className="rounded-[12px]" />
      </div>
    </div>
  );
}

const images = [
  {
    originalTitle: "Title",
    original:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
    description:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  },
  {
    originalTitle: "Title",
    original:
      "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/4c43b516-a11b-49bb-a2ed-d4b0c8cc34a5.jpeg?im_w=720",
    description:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  },
  {
    originalTitle: "Title",
    original:
      "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/239adad6-2478-45c8-9c9b-bd3527b792ff.jpeg?im_w=720",
    description:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  },
  {
    originalTitle: "Title",
    original:
      "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/239adad6-2478-45c8-9c9b-bd3527b792ff.jpeg?im_w=720",
    description:
      "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  },
  // {
  //   original:
  //     "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/2332cde9-89bb-46d5-b803-a1f91e7e12d9.jpeg?im_w=720",
  //   description:
  //     "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  // },
  // {
  //   original:
  //     "https://a0.muscache.com/im/pictures/miso/Hosting-546923400311446203/original/02eb20aa-6f28-4204-a91a-a125878d027f.jpeg?im_w=720",
  //   description:
  //     "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
  // },
];

type Props = {
  imgSrc: any;
};

export const MyGallery = (props: Props) => {
  return (
    <ImageGallery
      items={images}
      // renderItem={() => (
      //   <div className=" w-full mb-2 h-[250px] sm:h-[290px] xl:h-[280px] rounded-[12px] bg-green-500">
      //     <div className="flex flex-row h-full ">
      //       <img src={props.imgSrc} className="rounded-[12px]" />
      //     </div>
      //   </div>
      // )}
      showBullets={true}
      showPlayButton={false}
      showThumbnails={false}
      showFullscreenButton={false}
      renderLeftNav={(onClick, disabled) => (
        <LeftNav onClick={onClick} disabled={disabled} />
      )}
      renderRightNav={(onClick, disabled) => (
        <RightNav onClick={onClick} disabled={disabled} />
      )}
    />
  );
};
