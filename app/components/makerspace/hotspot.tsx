import { Html } from "@react-three/drei";

export default function Hotspot({
  position,
  onClick,
  children,
}: {
  children: React.ReactNode;
  position: [number, number, number];
  onClick: () => void;
}) {
  return (
    <Html position={position} center>
      <div onClick={onClick} className="group relative cursor-pointer">
        {children}
      </div>
    </Html>
  );
}
