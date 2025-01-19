import { GoBoard } from "./GoBoard";
import { Stone } from "./Stone";

export function Go() {
	return (
		<>
			<GoBoard />
			<Stone position={[20, 0.5, 20]} />
			<Stone position={[19, 0.5, 21]} />
			<Stone position={[20, 0.5, 22]} />
			<Stone position={[21, 0.5, 21]} />
			<Stone position={[20, 0.5, 21]} isBlack={true} />
		</>
	)
}