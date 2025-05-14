import Image from "next/image";

interface TestimonialCardProps {
    text: string;
    imageSrc: string;
    name: string;
    username: string;
}

export const TestimonialCard = ({ text, imageSrc, name, username }: TestimonialCardProps) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 italic mb-4">“{text}”</p>
            <div className="flex items-center gap-4 mt-auto">
                <Image className="rounded-full object-cover" width={40}  height={40} src={imageSrc} alt={name} />
                <div className="text-left">
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{username}</p>
                </div>
            </div>
        </div>
    );
};