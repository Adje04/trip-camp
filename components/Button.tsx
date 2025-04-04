import Image from "next/image"

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> void;
}


const Button = ({ type, title, icon, variant, full, onClick }: ButtonProps) => {
    return (
        <div>
            <button
                type={type}
                className={`flex-center cursor-pointer gap-2 rounded-full ${variant}  ${full && 'w-full'}`}
               
                onClick={onClick}
            >
                {icon && <Image src={icon} alt={title} width={24} height={24} />}
                <label htmlFor="" className="regular-16 whitespace-nowrap "> {title} </label>
            </button>
        </div>
    )
}

export default Button