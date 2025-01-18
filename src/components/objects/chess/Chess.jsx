import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export function Chess() {
  return (
    <>
      <King scale={0.1} position={[0, 0, 0]} />
      <Queen scale={0.1} position={[1, 0, 0]} />
      <Bishop scale={0.1} position={[2, 0, 0]} />
      <Knight scale={0.1} position={[3, 0, 0]} />
      <Rook scale={0.1} position={[4, 0, 0]} />
      <Pawn scale={0.1} position={[5, 0, 0]} />
    </>
  )
}