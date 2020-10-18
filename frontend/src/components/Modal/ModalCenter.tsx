import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title: string;
    closeModal: () => void;
};

export const ModalCenter = ({ children, title, closeModal }: Props) => {
    return (
        <>
            <div className="modal-center__position absolute z-20 bg-white border rounded-md p-5 shadow-md w-1/4">
                <div className="flex justify-between center items-center mb-3">
                    <h2 className="text-xl">{title}</h2>
                    <i
                        className="fas fa-times text-gray-500 cursor-pointer hover:text-black transition ease-in-out duration-150"
                        onClick={closeModal}
                    ></i>
                </div>

                {children}
            </div>

            <div
                className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-25 z-10"
                onClick={closeModal}
            />
        </>
    );
};
