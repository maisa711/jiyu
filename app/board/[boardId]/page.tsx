import { Canvas } from "./_components/canvas";

import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: {
        boardId: string;
    };
}

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
    const { boardId } = params;

    return (
        <Room roomId={boardId} fallback={<Loading/>}>
            <Canvas boardId={boardId} />
        </Room>
    );
};

export default BoardIdPage;
