const UserIcon = () => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 21a8 8 0 10-16 0" />
            <circle cx="12" cy="8" r="4" />
            <path
                d="M20 8c0 1.5-1 3-2 4M4 8c0 1.5 1 3 2 4"
                opacity="0.5"
            />
        </svg>
    );
};

export default UserIcon;
