import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useMediaQuery } from "react-responsive"
import { Room } from './Room.jsx'
import HeroLights from "./HeroLights.jsx"
import Particles from "./Particles.jsx"
import { useCallback, useEffect, useRef, useState } from "react"

const ROOM_START_ROTATION_Y = -Math.PI / 4
const ROOM_SWING_ANGLE = Math.PI / 6
const ROOM_SWING_DURATION = 11
const TOUCH_DIRECTION_THRESHOLD = 8
const TOUCH_ROTATION_SPEED = 0.005

const HeroExperience = () => {
  const containerRef = useRef(null);
  const cameraRef = useRef(null);
  const roomGroupRef = useRef(null);
  const roomTweenRef = useRef(null);
  const touchGestureRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});

  useEffect(() => {
    const node = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        if (roomTweenRef.current) {
          if (entry.isIntersecting) {
            roomTweenRef.current.play();
          } else {
            roomTweenRef.current.pause();
          }
        }
      },
      { threshold: 0.05 }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  useGSAP(() => {
    const group = roomGroupRef.current;
    if (!group) return;

    gsap.set(group.rotation, { y: ROOM_START_ROTATION_Y });

    roomTweenRef.current = gsap.to(group.rotation, {
      y: ROOM_START_ROTATION_Y - ROOM_SWING_ANGLE,
      duration: ROOM_SWING_DURATION,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);

  const stopRoomRotation = useCallback(() => {
    if (roomTweenRef.current) {
      roomTweenRef.current.kill();
      roomTweenRef.current = null;
    }
  }, []);

  // Keep vertical gestures native; only orbit after a touch clearly moves horizontally.
  useEffect(() => {
    const node = containerRef.current;
    if (!node || !isTablet) return;

    const resetGesture = () => {
      touchGestureRef.current = null;
    };

    const handleTouchStart = (event) => {
      const camera = cameraRef.current;
      if (!camera || event.touches.length !== 1) {
        resetGesture();
        return;
      }

      const touch = event.touches[0];
      touchGestureRef.current = {
        identifier: touch.identifier,
        startX: touch.clientX,
        startY: touch.clientY,
        startAngle: Math.atan2(camera.position.x, camera.position.z),
        radius: Math.hypot(camera.position.x, camera.position.z),
        cameraY: camera.position.y,
        direction: null
      };
    };

    const handleTouchMove = (event) => {
      const camera = cameraRef.current;
      const gesture = touchGestureRef.current;
      if (!camera || !gesture) return;

      let touch = null;
      for (let index = 0; index < event.touches.length; index += 1) {
        if (event.touches[index].identifier === gesture.identifier) {
          touch = event.touches[index];
          break;
        }
      }

      if (!touch) return;

      const deltaX = touch.clientX - gesture.startX;
      const deltaY = touch.clientY - gesture.startY;

      if (!gesture.direction) {
        if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < TOUCH_DIRECTION_THRESHOLD) return;

        gesture.direction = Math.abs(deltaX) > Math.abs(deltaY) ? 'horizontal' : 'vertical';
        if (gesture.direction === 'horizontal') stopRoomRotation();
      }

      if (gesture.direction !== 'horizontal') return;

      const angle = gesture.startAngle - deltaX * TOUCH_ROTATION_SPEED;
      camera.position.set(
        Math.sin(angle) * gesture.radius,
        gesture.cameraY,
        Math.cos(angle) * gesture.radius
      );
      camera.lookAt(0, 0, 0);
      camera.updateMatrixWorld();
    };

    const listenerOptions = { passive: true };
    node.addEventListener('touchstart', handleTouchStart, listenerOptions);
    node.addEventListener('touchmove', handleTouchMove, listenerOptions);
    node.addEventListener('touchend', resetGesture, listenerOptions);
    node.addEventListener('touchcancel', resetGesture, listenerOptions);

    return () => {
      node.removeEventListener('touchstart', handleTouchStart, listenerOptions);
      node.removeEventListener('touchmove', handleTouchMove, listenerOptions);
      node.removeEventListener('touchend', resetGesture, listenerOptions);
      node.removeEventListener('touchcancel', resetGesture, listenerOptions);
    };
  }, [isTablet, stopRoomRotation]);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        dpr={[1, 1.5]}
        gl={{ powerPreference: "high-performance", antialias: true }}
        camera={{ position: [0, 0, 15], fov: 45 }}
        onCreated={({ camera }) => {
          cameraRef.current = camera;
        }}
        style={{ touchAction: isTablet ? 'pan-y' : 'auto' }}
      >
        {!isTablet && (
          <OrbitControls
           enablePan={false}
           maxDistance={20}
           minDistance={5}
           minPolarAngle={Math.PI / 5}
           maxPolarAngle={Math.PI / 2}
           onStart={stopRoomRotation}
          />
        )}

        <HeroLights />

        <Particles count={isMobile ? 40 : 100} />

        <group
         ref={roomGroupRef}
         scale={isMobile ? 0.7 : 1}
         position={[0, -3.5, 0]}
         rotation={[0, ROOM_START_ROTATION_Y, 0]}
        >
          <Room />
        </group>
      </Canvas>
    </div>
  )
}

export default HeroExperience
