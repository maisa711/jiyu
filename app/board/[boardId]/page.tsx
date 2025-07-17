import { Canvas } from "./_components/canvas";

import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: Promise<{
        boardId: string;
    }>;
}

const BoardIdPage = async (props: BoardIdPageProps) => {
    const params = await props.params;
    const { boardId } = params;

    return (
        <Room roomId={boardId} fallback={<Loading/>}>
            <Canvas boardId={boardId} />
        </Room>
    );
};

export default BoardIdPage;
