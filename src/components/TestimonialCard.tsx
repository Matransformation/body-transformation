// src/components/TestimonialCard.tsx
interface TestimonialCardProps {
    name: string;
    text: string;
  }
  
  export default function TestimonialCard({ name, text }: TestimonialCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-700">{text}</p>
      </div>
    );
  }
  