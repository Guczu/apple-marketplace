
type Props = {
    children: string | JSX.Element;
    styles?: string;
    animation?: boolean;
    onClick?: () => {}; 
}

const PrimaryButton = ({ children, styles, animation, onClick }: Props) => {
  return (
    <button className={`w-fit p-2 pl-4 pr-4 flex justify-center items-center bg-black font-semibold rounded-lg text-main-soft hover:bg-[#242424] ${animation && "hover:animate-grow-up"} ${styles}`} onClick={onClick}>
        {children}
    </button>
  )
}

export default PrimaryButton