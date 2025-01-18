import { Bishop } from "./Bishop";
import { King } from "./King";
import { Knight } from "./Knight";
import { Pawn } from "./Pawn";
import { Queen } from "./Queen";
import { Rook } from "./Rook";

export function Chess() {
  return (
    <>
      <King scale={0.1} />
      <Queen scale={0.1} />
      <Bishop scale={0.1} />
      <Knight scale={0.1} />
      <Rook scale={0.1} />
      <Pawn scale={0.1} />
    </>
  )
}