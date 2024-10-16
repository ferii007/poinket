const modalVariants = {
    initial: { opacity: 0, y: -50 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { ease: "easeOut", duration: 0.15 },
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { ease: "easeIn", duration: 0.15 },
    },
};

const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export {
    modalVariants,
    dropdownVariants
}