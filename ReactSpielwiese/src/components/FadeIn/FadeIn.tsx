import { ReactNode } from "react";
import './fade-in.css';

export default function FadeIn({ children }: { children: ReactNode }) {
    return (
        <div className="fade-in__animation">
            {children}
        </div>
    );
}