import { Bishop } from "./Bishop";
import { ChessBoard } from "./ChessBoard";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export function Chess() {
  return (
    <>
      <ChessBoard />
      <Rook scale={0.1} position={[-3.5, 0, -3.5]} />
      <Knight scale={0.1} position={[-2.5, 0, -3.5]} />
      <Bishop scale={0.1} position={[-1.5, 0, -3.5]} />
      <King scale={0.1} position={[-0.5, 0, -3.5]} />
      <Queen scale={0.1} position={[0.5, 0, -3.5]} />
      <Bishop scale={0.1} position={[1.5, 0, -3.5]} />
      <Knight scale={0.1} position={[2.5, 0, -3.5]} />
      <Rook scale={0.1} position={[3.5, 0, -3.5]} />

      <Pawn scale={0.1} position={[-3.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[-2.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[-1.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[-0.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[0.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[1.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[2.5, 0, -2.5]} />
      <Pawn scale={0.1} position={[3.5, 0, -2.5]} />

      <Pawn scale={0.1} position={[-3.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[-2.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[-1.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[-0.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[0.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[1.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[2.5, 0, 2.5]} isBlack={true} />
      <Pawn scale={0.1} position={[3.5, 0, 2.5]} isBlack={true} />

      <Rook scale={0.1} position={[-3.5, 0, 3.5]} isBlack={true} />
      <Knight scale={0.1} position={[-2.5, 0, 3.5]} isBlack={true} />
      <Bishop scale={0.1} position={[-1.5, 0, 3.5]} isBlack={true} />
      <King scale={0.1} position={[-0.5, 0, 3.5]} isBlack={true} />
      <Queen scale={0.1} position={[0.5, 0, 3.5]} isBlack={true} />
      <Bishop scale={0.1} position={[1.5, 0, 3.5]} isBlack={true} />
      <Knight scale={0.1} position={[2.5, 0, 3.5]} isBlack={true} />
      <Rook scale={0.1} position={[3.5, 0, 3.5]} isBlack={true} />
    </>
  )
}