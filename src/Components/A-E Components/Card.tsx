import { CSSProperties, ReactNode } from "react";

type CardProps = {
    title: string;
    subtitle?: string;
    children: ReactNode;
    style?: CSSProperties;
}

const Card = ({title, subtitle, children, style}:CardProps) => {
    return (
      <div className={`card-container ${style}`}>
          <h2 className='title'>{title}</h2>
          <h3>{subtitle}</h3>
          {children}
        
      </div>
    )
  }
  
  export default Card
  