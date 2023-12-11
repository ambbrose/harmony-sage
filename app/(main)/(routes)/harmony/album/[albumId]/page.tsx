import { Albumclient } from "@/components/album-client";

const AlbumPage = ({ params }: { params: { albumId: string } }) => {

    return (
        <div className="h-full w-full">
            <Albumclient albumId={params.albumId} />
        </div>
    );
};

export default AlbumPage;