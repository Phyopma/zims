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
    <Html className="w-full" position={position} center>
      {children}
    </Html>
  );
}
