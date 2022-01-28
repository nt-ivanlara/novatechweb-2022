import React from "react";

interface Props {
    id: string;
}

const YoutubeEmbed = ({ id }: Props) => {
    if (!id) return <span>Error on video load</span>;

    return (
        <div className="flex items-center rounded-xl overflow-hidden">
            <iframe
                // width="1135"
                // height="575"
                className="w-full min-w-[90vw] md:min-w-[80vw] h-60 md:h-[575px]"
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
            ></iframe>
        </div>
    );
};

export default YoutubeEmbed;
