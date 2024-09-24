import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSideBar } from "@/contexts/sideBarContext";
import { useModal } from "@/contexts/modalContext";
import Icon from "@/components/icon";

export default function NavBar() {
    const { toggleExpanded } = useSideBar();
    const { toggleModal } = useModal();

    return (
        <div className="navbar bg-base-100 border-b-[1px] border-gray-700">
            <div className="flex-none">
                <Icon onClick={toggleExpanded} className="mr-3 ml-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </Icon>
            </div>
            <div className="flex-none hover:text-green-700 hover:underline cursor-pointer">
                <img
                    className="inline-block h-7 w-7 stroke-current mr-3"
                    src="icon-class.svg"
                >
                </img>
                <h1 className="text-xl">Google Sala de Aula</h1>
            </div>
            <div className="flex-1"></div>
            <div className="flex-none">
                <Icon onClick={toggleModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block h-5 w-5"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </svg>
                </Icon>
            </div>
            <div className="flex-none">
                <Icon>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path d="M7 5C7 6.10457 6.10457 7 5 7C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5Z" />
                        <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" />
                        <path d="M19 7C20.1046 7 21 6.10457 21 5C21 3.89543 20.1046 3 19 3C17.8954 3 17 3.89543 17 5C17 6.10457 17.8954 7 19 7Z" />
                        <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" />
                        <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                        <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" />
                        <path d="M5 21C6.10457 21 7 20.1046 7 19C7 17.8954 6.10457 17 5 17C3.89543 17 3 17.8954 3 19C3 20.1046 3.89543 21 5 21Z" />
                        <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" />
                        <path d="M19 21C20.1046 21 21 20.1046 21 19C21 17.8954 20.1046 17 19 17C17.8954 17 17 17.8954 17 19C17 20.1046 17.8954 21 19 21Z" />
                    </svg>
                </Icon>
            </div>
            <div className="flex-none">
                <Icon className="mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline-block h-8 w-8"
                    >
                        <FontAwesomeIcon icon={faCircleUser} />
                    </svg>
                </Icon>
            </div>
        </div>
    );
}
