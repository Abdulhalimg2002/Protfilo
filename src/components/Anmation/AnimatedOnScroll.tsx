import { useEffect, useRef, useState, type ReactNode } from "react";

interface IPropes{
children: ReactNode;
  className?: string; 
  delay?: number;              
  direction?: "up" | "down" | "left" | "right";  

}
const AnimatedOnScroll=({ children,className,delay=0,direction}:IPropes)=>{
     const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
   let translateClass = "";
  switch (direction) {
    case "up":
      translateClass = isVisible ? "translate-y-0" : "translate-y-10";
      break;
    case "down":
      translateClass = isVisible ? "translate-y-0" : "-translate-y-10";
      break;
    case "left":
      translateClass = isVisible ? "translate-x-0" : "translate-x-10";
      break;
    case "right":
      translateClass = isVisible ? "translate-x-0" : "-translate-x-10";
      break;
  }
    return(
         <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`transition-all duration-700 ease-out opacity-0 ${
        isVisible ? "opacity-100" : ""
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
    )
}
export default AnimatedOnScroll;