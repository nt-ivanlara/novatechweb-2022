import { VideoBoxProps } from "./interfaces";
import YoutubeEmbed from "../yt-embed/YoutubeEmbed";

const VideoBox = ({ title, video }: VideoBoxProps) => {
    return (
        <div className="flex items-center justify-center flex-col px-4 md:px-14 py-4 md:py-20">
            <h1 className="mt-8 md:mt-0 mb-8 md:mb-20 font-istok font-bold text-2xl text-nt-orange uppercase">
                {title}
            </h1>
            <YoutubeEmbed id={video} />
        </div>
    );
};

export default VideoBox;
