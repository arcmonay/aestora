import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rooms",
};

const rooms = [
  {
    id: "01",
    name: "Body",
    note: "Contour, cavitation, radiofrequency, cryolipolysis.",
    src: "/media/body.jpg",
  },
  {
    id: "02",
    name: "Skin",
    note: "Microdermabrasion, peels, needling, hydrodermabrasion.",
    src: "/media/face.jpg",
  },
  {
    id: "03",
    name: "Lymph",
    note: "Manual drainage, post-procedure lymph, clinic wrap.",
    src: "/media/lymph.jpg",
  },
  {
    id: "04",
    name: "Consult",
    note: "Chart review, photos, protocol assignment.",
    src: "/media/consult.jpg",
  },
];

export default function ClinicPage() {
  return (
    <>
      <p className="kicker">Practice · Rooms</p>
      <h1 className="display text-[2.2rem]">Four rooms. One chart.</h1>
      <p className="lede mt-3">
        Aestora is built like a small dermatology floor: a corridor, numbered
        rooms, and a consult desk. Staff chart every visit. You will be asked
        about medications, recent procedures, and what the field is — abdomen,
        face, limbs — before a protocol is written.
      </p>

      <div className="rooms">
        {rooms.map((room) => (
          <figure className="room" key={room.id}>
            <Image src={room.src} alt={room.name} width={800} height={500} />
            <figcaption>
              Rm {room.id} · {room.name}
              <span className="block mt-1 normal-case tracking-normal font-sans text-[0.8rem] text-[var(--muted)]">
                {room.note}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="mt-10 max-w-2xl">
        <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--muted)]">
          Practice notes
        </h2>
        <p className="mt-3 leading-7 text-[var(--ink)]">
          First visits are 20 minutes and billed as a consult if no protocol is
          performed the same day. Series are written in advance. We do not sell
          retail kits at the desk. If a finding is outside aesthetic medicine —
          infection, undiagnosed lesion, uncontrolled condition — we stop and
          refer.
        </p>
      </section>
    </>
  );
}
